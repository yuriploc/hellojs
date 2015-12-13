angular.module("vaidarcerto",[]);

angular.module("vaidarcerto").controller("ctl",function($scope,servico){
  $scope.mensagem = {}

  $scope.listar = function(){
    servico.listar().then(function(ret){
      $scope.mensagens = ret.data;
    });
  }

  $scope.listar();

  $scope.salvar = function(){
    servico.salvar($scope.mensagem).then(function(ret){
      $scope.listar();
      $scope.mensagem = {};
    });
  }

  $scope.excluir = function(idmensagem){
    servico.excluir(idmensagem).then(function(ret){
      $scope.listar();
      $scope.mensagem = {};
    });
  }
});

angular.module("vaidarcerto").service("servico", function($http){

  this.listar = function(){
    return $http({
      method:"GET",
      url:"/list"
    });
  }

  this.salvar = function(mensagem){
    return $http({
      method:mensagem.idmensagem?"PUT":"POST",
      data:JSON.stringify(mensagem),
      url:"/save"
    });
  }

  this.excluir = function(idmensagem){
    return $http({
      method:"DELETE",
      url:"/"+idmensagem
    });
  }

});
