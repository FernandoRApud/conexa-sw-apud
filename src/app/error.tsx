'use client';

import React, { ReactNode } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error({
      error, errorInfo,
    });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button
            type="button"
            onClick={ () => this.setState({
              hasError: false,
            }) }
          >
            Try again?
          </button>
        </div>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
