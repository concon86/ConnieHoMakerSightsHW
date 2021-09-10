import { useRef } from "react";
import { useContentContext } from "../../context/ContentContext";

export const Search = () => {
  const inputRef = useRef(null);
  const { setSearchName } = useContentContext()

  const onSubmit = (ev) => {
    ev.preventDefault();
  }

  const onChange = (ev) => {
    ev.preventDefault();
    setSearchName(inputRef.current?.value);
  }

  return (
    <form onSubmit={(ev) => onSubmit(ev)}>
      <fieldset>
        <input onChange={(ev) => onChange(ev)} ref={inputRef} type="text" name="name" placeholder="Name" />
      </fieldset>
    </form>
  )
}