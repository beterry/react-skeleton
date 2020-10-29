# Creating a skeleton loading screen

[Read the full blog post](https://benterry.dev/blog/react-skeleton/)
[View Demo](https://beterry.github.io/react-skeleton/)

## About this project

In my last few blog posts, I’ve been experimenting with reading data from APIs. Last week, I read review information from Google to create a dynamic star rating indicator and two weeks before that, I created a simple movie search application using The Movie Database API. Both of these projects had a similar flaw: while waiting for the API to respond, the interface displayed no information and then jarringly popped the information onto the screen when it was loaded. To me, this was a bad user experience and I wanted to further experiment with a way to fix this problem in the future.

Traditionally, to prevent users from seeing blank information while data is being fetched, developers would implement a loading spinner. However, this method does not solve the problem of information suddenly and unexpectedly popping to the screen. After some research, I discovered a modern, popular solution: a skeleton screen. 

Skeleton screens are visual placeholders indicating a loading state. They resemble low fidelity components. When data is properly loaded, the skeleton screen disappears, revealing the actual interface. Skeleton screens create a gradual loading effect which is a better, more seamless user experience than a traditional loading spinner.

### Goals

1. Design an app which reads data from an API
2. While the data is being fetched, display a skeleton screen
3. When the data is loaded, display the actual interface
