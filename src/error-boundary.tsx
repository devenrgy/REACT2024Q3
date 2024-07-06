import React from 'react';

class ErrorBoundary extends React.Component<{ children: React.ReactNode }> {
	state = {
		hasError: false,
	};

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error: unknown) {
		console.error(error);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div>
					<h1 className='p-10 text-center text-8xl font-bold'>Something went wrong.</h1>
					<button>Back</button>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
