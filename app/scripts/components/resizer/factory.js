export default ($log, $window) => {
  'ngInject';

  const factory = {};

  function onResize(scope) {
    return () => {
      $log.debug('Window resized!');
      scope.$digest();
    };
  }

  factory.registerResize = scope => {
    const listener = onResize(scope);
    $window.addEventListener('resize', listener);
    scope.$on(
      '$destroy', () => $window.removeEventListener('resize', listener)
    );
  };

  factory.getAdjustedHeight = exclude => () => {
    const height = $window.innerHeight - exclude;
    return {height: `${height}px`};
  };

  return factory;
};
