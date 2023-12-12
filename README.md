
# gradio_calendar 📅
A calendar component that lets users pick dates!

`Preprocessing`: The date passed to the python function will be a string formatted as YYYY-MM-DD or a datetime.datetime object
depending on the value of the type parameter.

`Postprocessing`: The value returned from the function can be a string or a datetime.datetime object. 

## Example usage


```python
import gradio as gr
from gradio_calendar import Calendar
import datetime

def is_weekday(date: datetime.datetime):
    return date.weekday() < 5

demo = gr.Interface(is_weekday, 
    [Calendar(type="datetime", label="Select a date")], 
    gr.Label(label="Is it a weekend?"))


demo.launch()

```


![](https://github.com/freddyaboulton/gradio-datepicker/assets/41651716/be2ffff3-4db5-4f12-9f6d-237acb1d1f96)