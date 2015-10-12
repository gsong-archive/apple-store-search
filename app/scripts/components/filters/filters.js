export function raw($sce) {
  'ngInject';

  return input => $sce.trustAsHtml(input);
}
