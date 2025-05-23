"use client";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">Weather App</h1>
        </div>
      </header>
      <main className="main-content">{children}</main>
    </div>
  );
};
