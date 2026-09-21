import { useEffect, type ComponentType } from 'react'

// Higher-Order Component: wraps a component and logs to the console
// when it mounts and unmounts, without changing its rendered output.
function withLogger<P extends object>(WrappedComponent: ComponentType<P>) {
  const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component'

  function WithLogger(props: P) {
    useEffect(() => {
      console.log(`[withLogger] ${componentName} mounted`)
      return () => console.log(`[withLogger] ${componentName} unmounted`)
    }, [])

    return <WrappedComponent {...props} />
  }

  WithLogger.displayName = `withLogger(${componentName})`
  return WithLogger
}

export default withLogger
