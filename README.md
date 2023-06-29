# Angular Breadcrumb Navigation

This repository contains an Angular component for a breadcrumb navigation menu with nested structure. The breadcrumb component allows users to navigate through a hierarchical menu by displaying a trail of links representing the current page's location within the menu structure. It supports multiple levels of nesting and provides dropdown functionality for parent and child menu items.

## Features

- Hierarchical breadcrumb navigation menu
- Support for multiple levels of nesting
- Dropdown functionality for parent and child menu items
- Dynamic updates based on user interactions
- Responsive design for various screen sizes

## View Demo

You can see a live demo of the Angular Breadcrumb Navigation component [here](https://stackblitz.com/edit/angular-breadcrumb-navigation).

## Installation

1. Clone the repository:

````
git clone https://github.com/Quartium/angular-breadcrumb-navigation.git
````
2. Install the dependencies:

```
cd angular-breadcrumb-navigation
npm install
````
## Usage

1. Import the `AppComponent` from the `app.component.ts` file into your Angular application.

2. Add the `<my-app></my-app>` component selector in your application template where you want to display the breadcrumb navigation.

3. Customize the `TREE_DATA` variable in `app.component.ts` to define your menu structure and URLs.

4. Customize the styles in `app.component.scss` to match your application's design.

5. Build and run your Angular application:
```
ng serve
````
6. Access your application in a web browser:

```
http://localhost:4200/
````
## Contributing

Contributions are welcome! If you find any issues or want to add new features, please submit an issue or a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

