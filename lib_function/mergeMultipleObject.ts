const mergeMultipleObject = (...args: Array<Record<string, unknown>>) => {
  return args.reduce((acc, cur) => {
    acc = { ...acc, ...cur }

    return acc
  }, {} as Record<string, unknown>)
}

export default mergeMultipleObject
