# Uncommon_React_Hooks
Understanding and learning about basics and how to use with some uncommon React Hooks

Self-learn about uncommon and special React Hooks(on updated):

1/useMemo can be assigned to a variable(calls to arrow function) and will remember that, only changes whenever dependecies make changes.

2/useCallback(often used call to API and in child components) will recreate function again only whenever dependencies make changes.

3/useImperativeHandle can be used to pass props from child component to father component(used together with useRef) and better than normal method since we can pass many functions 
or variables with only 1 variable ref.

4/useDebugValue to set label for state in React DevTools.
