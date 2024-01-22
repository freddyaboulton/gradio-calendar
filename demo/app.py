
import gradio as gr
from _app import demo as app
import os

_docs = {'Calendar': {'description': 'A calendar component that allows users to select a date.\n\ndepending on the value of the type parameter.\n\n\n    value: The default date value, formatted as YYYY-MM-DD. Can be either a string or datetime.datetime object.\n    type: The type of the value to pass to the python function. Either "string" or "datetime".\n    label: The label for the component.\n    info: Extra text to render below the component.\n    show_label: Whether to show the label for the component.\n    container: Whether to show the component in a container.\n    scale: The relative size of the component compared to other components in the same row.\n    min_width: The minimum width of the component.\n    interactive: Whether to allow the user to interact with the component.\n    visible: Whether to show the component.\n    elem_id: The id of the component. Useful for custom js or css.\n    elem_classes: The classes of the component. Useful for custom js or css.\n    render: Whether to render the component in the parent Blocks scope.\n    load_fn: A function to run when the component is first loaded onto the page to set the intial value.\n    every: Whether load_fn should be run on a fixed time interval.', 'members': {'__init__': {'value': {'type': 'str | datetime.datetime', 'default': 'None', 'description': None}, 'type': {'type': 'Literal["string", "datetime"]', 'default': '"datetime"', 'description': None}, 'label': {'type': 'str | None', 'default': 'None', 'description': None}, 'info': {'type': 'str | None', 'default': 'None', 'description': None}, 'show_label': {'type': 'bool | None', 'default': 'None', 'description': None}, 'container': {'type': 'bool', 'default': 'True', 'description': None}, 'scale': {'type': 'int | None', 'default': 'None', 'description': None}, 'min_width': {'type': 'int | None', 'default': 'None', 'description': None}, 'interactive': {'type': 'bool | None', 'default': 'None', 'description': None}, 'visible': {'type': 'bool', 'default': 'True', 'description': None}, 'elem_id': {'type': 'str | None', 'default': 'None', 'description': None}, 'elem_classes': {'type': 'list[str] | str | None', 'default': 'None', 'description': None}, 'render': {'type': 'bool', 'default': 'True', 'description': None}, 'load_fn': {'type': 'Callable[..., Any] | None', 'default': 'None', 'description': None}, 'every': {'type': 'float | None', 'default': 'None', 'description': None}}, 'postprocess': {'value': {'type': 'str | datetime.datetime | None', 'description': None}}, 'preprocess': {'return': {'type': 'str | datetime.datetime | None', 'description': None}, 'value': None}}, 'events': {'change': {'type': None, 'default': None, 'description': ''}, 'input': {'type': None, 'default': None, 'description': ''}, 'submit': {'type': None, 'default': None, 'description': ''}}}, '__meta__': {'additional_interfaces': {}, 'user_fn_refs': {'Calendar': []}}}
    
abs_path = os.path.join(os.path.dirname(__file__), "css.css")

with gr.Blocks(
    css=abs_path,
    theme=gr.themes.Default(
        font_mono=[
            gr.themes.GoogleFont("Inconsolata"),
            "monospace",
        ],
    ),
) as demo:
    gr.Markdown(
"""
# `gradio_calendar`

<div style="display: flex; gap: 7px;">
<a href="https://pypi.org/project/gradio_calendar/" target="_blank"><img alt="PyPI - Version" src="https://img.shields.io/pypi/v/gradio_calendar"></a> <a href="https://github.com/freddyaboulton/gradio-calendar/issues" target="_blank"><img alt="Static Badge" src="https://img.shields.io/badge/Issues-white?logo=github&logoColor=black"></a> <a href="https://huggingface.co/spaces/freddyaboulton/gradio_calendar/settings/discussions" target="_blank"><img alt="Static Badge" src="https://img.shields.io/badge/%F0%9F%A4%97%20Discuss-%23097EFF?style=flat&logoColor=black"></a>
</div>

Gradio component for selecting dates with a calendar 📆
""", elem_classes=["md-custom"], header_links=True)
    app.render()
    gr.Markdown(
"""
## Installation

```bash
pip install gradio_calendar
```

## Usage

```python
import gradio as gr
from gradio_calendar import Calendar
import datetime

def is_weekday(date: datetime.datetime):
    return date.weekday() < 5

demo = gr.Interface(is_weekday, 
    [Calendar(type="datetime", label="Select a date", info="Click the calendar icon to bring up the calendar.")], 
    gr.Label(label="Is it a weekday?"),
    examples=["2023-01-01", "2023-12-11"],
    cache_examples=True,
    title="Is it a weekday?")

if __name__ == "__main__":
    demo.launch()

```
""", elem_classes=["md-custom"], header_links=True)


    gr.Markdown("""
## `Calendar`

### Initialization
""", elem_classes=["md-custom"], header_links=True)

    gr.ParamViewer(value=_docs["Calendar"]["members"]["__init__"], linkify=[])


    gr.Markdown("### Events")
    gr.ParamViewer(value=_docs["Calendar"]["events"], linkify=['Event'])




    gr.Markdown("""

### User function

The impact on the users predict function varies depending on whether the component is used as an input or output for an event (or both).

- When used as an Input, the component only impacts the input signature of the user function. 
- When used as an output, the component only impacts the return signature of the user function. 

The code snippet below is accurate in cases where the component is used as both an input and an output.



 ```python
def predict(
    value: str | datetime.datetime | None
) -> str | datetime.datetime | None:
    return value
```
""", elem_classes=["md-custom", "Calendar-user-fn"], header_links=True)




    demo.load(None, js=r"""function() {
    const refs = {};
    const user_fn_refs = {
          Calendar: [], };
    requestAnimationFrame(() => {

        Object.entries(user_fn_refs).forEach(([key, refs]) => {
            if (refs.length > 0) {
                const el = document.querySelector(`.${key}-user-fn`);
                if (!el) return;
                refs.forEach(ref => {
                    el.innerHTML = el.innerHTML.replace(
                        new RegExp("\\b"+ref+"\\b", "g"),
                        `<a href="#h-${ref.toLowerCase()}">${ref}</a>`
                    );
                })
            }
        })
        
        Object.entries(refs).forEach(([key, refs]) => {
            if (refs.length > 0) {
                const el = document.querySelector(`.${key}`);
                if (!el) return;
                refs.forEach(ref => {
                    el.innerHTML = el.innerHTML.replace(
                        new RegExp("\\b"+ref+"\\b", "g"),
                        `<a href="#h-${ref.toLowerCase()}">${ref}</a>`
                    );
                })
            }
        })
    })
}

""")

demo.launch()
