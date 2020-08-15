const type = {
  text: 'YanoneKaffeesatz-Regular',
  heading: 'Oswald-SemiBold',
  title: 'Staatliches',
  empty: 'Pangolin-Regular'
}

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5,
}

const style = {
  h1: {
    fontFamily: type.text,
    fontSize: size.h1,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2,
  },
  h3: {
    fontFamily: type.title,
    fontSize: size.h3,
  },
  h4: {
    fontFamily: type.text,
    fontSize: size.h4,
  },
  h5: {
    fontFamily: type.text,
    fontSize: size.h4,
  },
  h6: {
    fontFamily: type.heading,
    fontSize: size.h6,
  },
  normal: {
    fontFamily: type.text,
    fontSize: size.regular,
  },
  description: {
    fontFamily: type.text,
    fontSize: size.medium,
  },
  empty:{
    fontFamily: type.empty,
    fontSize: size.regular
  }
}

export default {
  type,
  size,
  style,
}
