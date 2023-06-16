# To-Do Astria

A simple AI Powered to-do list web application. 

## Features
- Users can create, add, delete task items from their list.
- System can generate specific smaller action items from the user's list that helps them achieve their tasks in a more structured and guided manner.

## How to Use
- Navigate to the [website's URL](https://to-do-astria.vercel.app/).
- Enter a task in the text box at the top of the screen.
- Repeat till your list is complete.
- Press the `Delete` button on any task if you would like to remove it from your list.
- Press `GPT Actions` button at the top of the screen when your list has at least one item to generate action item steps for your tasks.
- Press the `x` button on the modal when ready to proceed with your to-do list.


> Note: You might receive error messages when trying to generate GPT actions due to longer response times of OpenAI APIs and Vercel's 5 second gateway timeout windows resulting in 504 errors.

## For Developers

### Environment
Add `.env.local` file to root of this project. 

- OPENAI_API_KEY: OpenAI API key for GPT calls
