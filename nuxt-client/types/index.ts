declare global {
  interface Window {
    Pusher: any;
    Echo: any;
  }

  interface ExampleEvent {
    string: string;
  }
}
