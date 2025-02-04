# Eat and Split

A simple React + TypeScript application built with Vite that lets you add friends, select a friend, and split bills between you and your friend. The app demonstrates state management, controlled components, and TypeScript type safety in a real-world scenario.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Project Structure](#project-structure)

## Overview

Eat and Split is a small interactive application where you can:

- Add a new friend with their details.
- Select a friend to split a bill with.
- Fill in the bill details and update the balance accordingly.

The application leverages React functional components, hooks (useState), and TypeScript for robust type-checking and error prevention.

## Features

- **Add a Friend:**  
  Use a form to add friends. Each friend is assigned a unique ID (using `crypto.randomUUID()`) and an initial balance.

- **View Friends List:**  
  All added friends are displayed in a list along with their current balance and status message.

- **Select & Split Bill:**  
  A friend can be selected from the list. On selection, a split form appears allowing you to input the bill value, your expense, and determine who pays the bill. This updates the friend’s balance accordingly.

- **State Management:**  
  Uses controlled components and a centralized state for dynamically showing and hiding forms. TypeScript ensures type safety and consistency across the application.

## Tech Stack

- **React**: UI library for building components.
- **TypeScript**: For static type checking.
- **Vite**: Build tool and development server.
- **ESLint**: For code quality and consistent style.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/eat-and-split.git
   cd eat-and-split
   ```

## Project Structure

eat-and-split/
├── public/
│ └── index.html # HTML template
├── src/
│ ├── App.tsx # Main application component
│ ├── AddFriend.tsx # Component for adding new friends
│ ├── AddFriendButtonShow.tsx # Button component to show the add friend form
│ ├── Friends.tsx # Component displaying the list of friends
│ ├── Split.tsx # Component for splitting the bill with a friend
│ ├── types.ts # TypeScript types used across the project
│ ├── index.css # Global CSS styles
│ └── main.tsx # Application entry point
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md # Project documentation (this file)
