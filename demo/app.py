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
