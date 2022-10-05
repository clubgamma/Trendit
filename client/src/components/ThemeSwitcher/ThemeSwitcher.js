import Form from "react-bootstrap/form";

const ThemeSwitcher = (props) => {
    return (<Form.Check
                type="switch"
                id="color-theme"
                label={(props.theme === 'light' ? 'Dark' : 'Light') + ' theme'}
                onChange={props.switchTheme}
                checked={props.theme === 'light' ? false : true}
            />);
}
export default ThemeSwitcher;