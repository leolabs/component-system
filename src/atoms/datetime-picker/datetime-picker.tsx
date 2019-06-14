import React, {
  useMemo,
  useCallback,
  ChangeEvent,
  useState,
  useEffect,
  ComponentProps,
} from "react";
import { styled } from "linaria/react";
import { neutral } from "../../theme/colors/colors";
import { css } from "linaria";

/** Event passed in `onDateChange` callback */
export interface DateChangeEvent {
  value: Date;
}

/** Props for the DatetimePicker component */
export interface DatetimePickerProps {
  /** Date/Time value for controlling the input */
  value?: Date;

  /** HTML ID-Attribute to set on the first input element */
  id?: string;

  /**
   * Callback being called when the user sucessfully changes
   * the value of the component.
   * Use `e.value` to get the Date/Time.
   */
  onDateChange?: (e: DateChangeEvent) => void;
}

const Base = styled.div`
  display: inline-flex;
  color: ${neutral[800]};
  width: 12rem;
`;

const Display = styled.div<{ className?: string; type?: "date" | "time" } & ComponentProps<"div">>`
  position: relative;
  padding: 0.5rem 1rem;
  background: ${neutral[100]};
  overflow: hidden;
  display: block;

  flex-basis: 0;
  flex-grow: ${p => (p.type === "date" ? 2 : 1)};

  &:first-of-type {
    border-radius: 1rem 0 0 1rem;
  }

  &:last-of-type {
    border-radius: 0 1rem 1rem 0;
  }

  &:not(:last-of-type) {
    margin-right: 0.125rem;
  }

  input {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;

    padding: 0;
    margin: 0;
    border: none;
    background: none;
    border-radius: none;
    outline-style: none;
    opacity: 0;
    -webkit-appearance: none;

    &::-webkit-calendar-picker-indicator {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 0;
      opacity: 0;
    }
  }
`;

const unsupported = css`
  span {
    display: none;
  }

  input {
    opacity: 1;
    position: relative;
    right: auto;
    bottom: auto;
    width: 100%;
    font-size: 1rem;
    font-family: inherit;
    color: inherit;
    text-align: center;
  }
`;

interface PseudoPickProps extends ComponentProps<"input"> {
  value: string;
  repr: string;
  type: "date" | "time";
  onChange?: (e: ChangeEvent) => void;
}

const stopClickBubble = (e: React.MouseEvent) => "chrome" in window || e.preventDefault();

const needsSpecialDesktop = !("ontouchstart" in window);
const supportsInputType = (type: string) => {
  if (type === "time" && needsSpecialDesktop) {
    return false;
  }
  const input = document.createElement("input");
  input.setAttribute("type", type);
  return input.type == type;
};

const PseudoPick: React.SFC<PseudoPickProps> = ({ value, repr, type, onChange, ...cProps }) => {
  const supported = useMemo(() => supportsInputType(type), [type]);

  const [tempValue, setTempValue] = useState(value);
  const [isEditing, setEditing] = useState(false);
  const handleChange = useCallback(
    (e: ChangeEvent) => {
      if (!onChange) {
        return;
      }
      if (supported) {
        return onChange(e);
      }
      setEditing(true);
      const { value } = e.target as HTMLInputElement;
      setTempValue(value);
    },
    [onChange, supported, setEditing, setTempValue],
  );
  const handleBlur = useCallback(
    (e: ChangeEvent) => {
      if (supported || !onChange || tempValue === value) {
        return;
      }
      setEditing(false);
      onChange(e);
    },
    [supported, value, tempValue, onChange],
  );
  useEffect(() => {
    if (!isEditing && value !== tempValue) {
      setTempValue(value);
    }
  }, [isEditing, value, tempValue, setTempValue]);

  return (
    <Display className={!supported ? unsupported : ""} type={type}>
      <input
        {...cProps}
        type={supported ? type : "text"}
        value={supported ? value : tempValue}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <span aria-hidden>{repr}</span>
    </Display>
  );
};

const pad = (val: number) => (val < 10 ? "0" + String(val) : String(val));

/**
 * Styled input for date & time.
 *
 * Tries to use native capabilities as much
 * as possible for the picker.
 *
 * Behavior across browser:
 * - Native Picker for date & time
 *   - Mobile Chrome, mobile Safari, mobile Firefox
 * - Picker for date, text input for time for most desktop browsers
 *   (detection: `!('touchstart' in window)`)
 *   - Chrome, Firefox
 * - Text input for date & time (feature detected)
 *   - Safari
 *
 * Sizing from the outside via flexbox should be possible.
 * Inputs keep a 3:2 sizing ratio.

 * @example
 * ```
 * <FormField label="Start" icon={<FeatherIcon icon={Clock} />} inline>
 *   <DatetimePicker value={date} onDateChange={handleDateChange} />
 * </FormField>
 * ```
 */
export const DatetimePicker: React.SFC<DatetimePickerProps> = ({ value, onDateChange, id }) => {
  const d = value || new Date();

  const date = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const time = `${pad(d.getHours())}:${pad(d.getMinutes())}`;

  const dateStr = d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const timeStr = d.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });

  // simplification for change handlers
  // provides a memoized function which returns an event handler based on the type
  const inputChanged = useMemo(
    () => (type: "date" | "time") => (e: ChangeEvent) => {
      if (!onDateChange) {
        return;
      }
      const update = (e.target as HTMLInputElement).value;
      const datetime =
        type === "date" ? new Date(`${update}T${time}:00`) : new Date(`${date}T${update}:00`);
      if (isNaN(datetime.getTime())) {
        onDateChange({ value: d });
        return;
      }
      onDateChange({ value: datetime });
    },
    [date, time, d, onDateChange],
  );

  return (
    <Base>
      <PseudoPick
        type="date"
        id={id}
        value={date}
        repr={dateStr}
        onChange={useCallback(inputChanged("date"), [inputChanged])}
      />
      <PseudoPick
        type="time"
        value={time}
        repr={timeStr}
        onChange={useCallback(inputChanged("time"), [inputChanged])}
        onClick={stopClickBubble}
      />
    </Base>
  );
};
