## E-commerce Project

#### [Project link](https://ecommerce-project-makiaveli.netlify.app)

This project is an e-commerce application developed using React, Typescript,
Axios, Zustand, React-hook-form, and dummyjson for the API.

### Technologies used

- [**React**](https://uk.legacy.reactjs.org/)
- [**Typescript**](https://www.typescriptlang.org/)
- [**Axios**](https://axios-http.com/ru/docs/intro)
- [**Zustand**](https://zustand-demo.pmnd.rs/)
- [**React-hook-form**](https://react-hook-form.com/)
- [**Zod**](https://github.com/colinhacks/zod)
- [**React-router-dom**](https://reactrouter.com/en/main)
- [**dummyjson**](https://dummyjson.com/)

### Features

- Viewing Products: Users can explore a variety of products available for
  purchase.
- Cart Functionality: Users can add products to their cart while browsing the
  website.
- Purchase Completion: Users can proceed to complete the purchase process after
  adding items to their cart.
- Authentication: The project incorporates user authentication to ensure secure
  access to features such as cart management (For auth you need to find a user
  credentials in dummyjson)
    - username: kminchelle
    - password: 0lelplR

### Folder Structure

- **public/**: Contains the public assets of the application such as HTML files,
  images, and icons.
- **src/**: Contains the source code of the application.
    - **assets/**: Stores static assets like images, logos, etc.
    - **components/**: Contains reusable React components used in features or
      pages folder.
    - **core/**: Contains required elements for application working such as a
      store, repositories.
    - **hooks/**: Contains hooks used throughout the application except the
      shared folder.
    - **features/**: Contains React components used only in the page folder.
    - **shared/**: Contains the shared assets of the application.
        - **services/**: Includes services used throughout the application.
        - **types/**: Contains reusable types.
        - **UI/**: Contains reusable UI components used throughout the
          application.
        - **utils/**: Contains reusable utilities used throughout the
          application.
    - **pages/**: Contains the main pages of the application.
    - **styles/**: Contains CSS or SCSS files for styling the application.
- **App.tsx**: The main entry point of the application.
- **index.tsx**: The entry point of the React application

### Setup information

1. Clone the project
    ```bash
      git clone https://github.com/MaksymMakiaveli/React-Ecommerce.git
    ```
2. Ensure that you have Node.js and npm (Node Package Manager) installed on your
   machine.
3. Install the dependencies
    ```bash
      npm install
   
      or
   
      yarn install
    ```
4. Once the installation is complete, you can start the development server
   by running the following command:
    ```bash
      npm run dev
   
      or
   
      yarn dev
    ```

