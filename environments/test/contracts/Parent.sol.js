// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[{"name":"key_","type":"bytes32"}],"name":"getOrganisation","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"key_","type":"bytes32"}],"name":"createOrganisation","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"key_","type":"bytes32"}],"name":"removeOrganisation","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"organisations","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"ParentResolverAddress","outputs":[{"name":"","type":"address"}],"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"OrganisationAddress","type":"address"},{"indexed":false,"name":"OrganisationOwner","type":"address"},{"indexed":false,"name":"now","type":"uint256"}],"name":"OrganisationCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"OrganisationKey","type":"bytes32"},{"indexed":false,"name":"OrganisationOwner","type":"address"},{"indexed":false,"name":"now","type":"uint256"}],"name":"OrganisationDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"OrganisationAddress","type":"address"},{"indexed":false,"name":"OrganisationOwner","type":"address"},{"indexed":false,"name":"now","type":"uint256"}],"name":"OrganisationUpgraded","type":"event"}],
    binary: "606060405261223f806100126000396000f3606060405260e060020a600035046304291e7281146100475780636b46fdc01461007657806395948c8b146100a3578063cd6d718a1461010f578063f794477c14610130575b005b600435600090815260208190526040902054600160a060020a03165b600160a060020a03166060908152602090f35b61004560043560008181526020819052604081205481908190600160a060020a0316811461014257610002565b6100456004356000818152602081905260409020805473ffffffffffffffffffffffffffffffffffffffff19169055606081815232600160a060020a03166080524260a0527f2608970b92b570ff563c1e03a8bd72bb89934b29c812a59061ce82327f9e88399080a150565b610063600435600060208190529081526040902054600160a060020a031681565b610063600154600160a060020a031681565b606061057a80610258833901809050604051809103906000f09250604051610f44806107d2833901809050604051809103906000f09150308383604051610b29806117168339018084600160a060020a0316815260200183600160a060020a0316815260200182600160a060020a031681526020019350505050604051809103906000f09050806000600050600086815260200190815260200160002060006101000a815481600160a060020a03021916908302179055507ed2ffbf5d5af9df69470d5d96be685959b58c0a366f4a8b6ff02afb4d95c8868132426040518084600160a060020a0316815260200183600160a060020a03168152602001828152602001935050505060405180910390a15050505056606060405260008054600160a060020a03191633179055610556806100246000396000f3606060405236156100a35760e060020a6000350463095ea7b381146100ab57806318160ddd146100c357806323b872dd146100d15780634a79d50c146100ed5780635e823d96146100f65780635ef00f181461010a57806370a08231146101245780638da5cb5b1461014857806395d89b411461015a578063a6f9dae114610169578063a9059cbb1461018b578063dd62ed3e146101a4578063f074347e146101d4575b610122610002565b6101226004356024356001548111156104e057610002565b6001545b6060908152602090f35b610122600435602435604435828180600014156102e557610002565b6100c760025481565b610122600435806000141561053957610002565b6003805463ffffffff191660e060020a600435041790555b005b6100c7600435600160a060020a038116600090815260046020526040902054919050565b6100c7600054600160a060020a031681565b6100c760035460e060020a0281565b610122600435600054600160a060020a0390811633909116146101df57610002565b6101226004356024353381806000141561025457610002565b600160a060020a0360043581166000908152600560209081526040808320602435909416835292905220546100c7565b600435600255610122565b80600160a060020a0316600014156101f657610002565b600054426060908152600160a060020a038084169216907f4c37b24b600916176446859ec41fb06842ec1dfaeeb0bee28784b51f24b8c30890602090a380600060006101000a815481600160a060020a030219169083021790555050565b600160a060020a0382166000908152600460205260409020548190101561027a57610002565b604060002054808201101561028e57610002565b6040600081812080548490039055600160a060020a03808716808352928220805485019055839291908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906060a450505050565b600160a060020a0382166000908152600460205260409020548190101561030b57610002565b604060002054818101101561031f57610002565b8483806000141561032f57610002565b600560209081526040600081812033600160a060020a031682529092529020548190101561035c57610002565b6005600050600083600160a060020a03168152602001908152602001600020600050600033600160a060020a0316815260200190815260200160002060005054816005600050600085600160a060020a03168152602001908152602001600020600050600033600160a060020a03168152602001908152602001600020600050540110156103e957610002565b846004600050600089600160a060020a03168152602001908152602001600020600082828250540392505081905550846004600050600088600160a060020a03168152602001908152602001600020600082828250540192505081905550846005600050600089600160a060020a03168152602001908152602001600020600050600033600160a060020a031681526020019081526020016000206000828282505403925050819055508486600160a060020a031688600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405180905060405180910390a450505050505050565b33600160a060020a039081166000818152600560209081526040808320948716808452949091528120849055839291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906060a45050565b60015481018190101561054b57610002565b60018054820190555056606060405260008054600160a060020a03191633179055610f20806100246000396000f3606060405236156100a35760e060020a600035046306661abd81146100a55780631bf6912d146100bb5780631d65e77e146100f457806335960812146102145780635b28e445146102635780636d2d4bac146102b25780638d9776721461036c5780638da5cb5b146103fb578063a39c5f3e1461040d578063a6f9dae114610444578063c72ef41f14610465578063cacb4f1614610521578063f125c1dc1461056d575b005b6001545b60408051918252519081900360200190f35b6100a36004356001805482908110156100025750600052600080516020610ec083398151915260058202015460ff1615610c6357610002565b61057e6004356020604051908101604052806000815260200150602060405190810160405280600081526020015060006000600060006001600050878154811015610002575090819052600080516020610ea08339815191526005880290810154600080516020610ec0833981519152820154600080516020610f00833981519152830154600080516020610ee083398151915284018054604080516020600299841615610100026000190190931698909804601f8101839004830289018301909152808852919687967fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf7019560ff9590951694929091879190830182828015610cc95780601f10610c9e57610100808354040283529160200191610cc9565b6100a3600435602435600180548390811015610002575080546000829052600080516020610f0083398151915260058502015491839185908110156100025750505080820111610d7457610002565b6100a3600435602435600180548390811015610002575080546000829052600080516020610ea083398151915260058502015491839185908110156100025750505080820111610e0a57610002565b6040805160206004803580820135601f81018490048402850184019095528484526100a394919360249390929184019190819084018382808284375050604080516020601f8935808c0135918201839004830284018301909452808352979998604498929750929092019450925082915084018382808284375094965050505050505060018054808201808355600092908280158290116109da576005028160050283600052602060002091820191016109da9190610aaa565b6106606004356001805482908110156100025750600052600080516020610ec0833981519152600590910290810154600080516020610ea0833981519152820154600080516020610f00833981519152830154600080516020610ee08339815191528401937fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf7019260ff169185565b61077c600054600160a060020a031681565b6100a96004356000600160005082815481101561000257509052600080516020610ec083398151915260058202015460ff16610579565b6100a360043560005433600160a060020a039081169116146107b157610002565b60408051602060248035600481810135601f81018590048502860185019096528585526100a39581359591946044949293909201918190840183828082843750506040805160209735808a0135601f81018a90048a0283018a0190935282825296989760649791965060249190910194509092508291508401838280828437509496505050505050506001805484908110156100025750600052600080516020610ec083398151915260058402015460ff161561082e57610002565b6107986004356000600060006001600050848154811015610002575090525050600502600080516020610f00833981519152810154600080516020610ea0833981519152909101549091565b6100a960043560015481105b919050565b6040518080602001806020018681526020018581526020018481526020018381038352888181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156105f45780820380516001836020036101000a031916815260200191505b508381038252878181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561064d5780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b60408051908101849052606081018390526080810182905260a08082528654600260018216156101000260001901909116049082018190528190602082019060c0830190899080156106f35780601f106106c8576101008083540402835291602001916106f3565b820191906000526020600020905b8154815290600101906020018083116106d657829003601f168201915b5050838103825287546002600182161561010002600019019091160480825260209190910190889080156107685780601f1061073d57610100808354040283529160200191610768565b820191906000526020600020905b81548152906001019060200180831161074b57829003601f168201915b505097505050505050505060405180910390f35b60408051600160a060020a039092168252519081900360200190f35b6040805192835260208301919091528051918290030190f35b80600160a060020a0316600014156107c857610002565b604080516000544282529151600160a060020a038085169316917f4c37b24b600916176446859ec41fb06842ec1dfaeeb0bee28784b51f24b8c308919081900360200190a380600060006101000a815481600160a060020a030219169083021790555050565b816001600050848154811015610002576000918252600502600080516020610ee08339815191520190506000016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106108bf57805160ff19168380011785555b506108ef9291505b8082111561097257600081556001016108ab565b828001600101855582156108a3579182015b828111156108a35782518260005055916020019190600101906108d1565b5050806001600050848154811015610002576000918252600502600080516020610ee08339815191520190506001016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061097657805160ff19168380011785555b506109a69291506108ab565b5090565b82800160010185558215610966579182015b82811115610966578251826000505591602001919060010190610988565b5050604051429084907fdab70597d373cb79eb5e0bd426044d0f0cc23546a038e03b64d9e3a4407f074c90600090a3505050565b505050905060a0604051908101604052808481526020018381526020016000815260200160008152602001600081526020015060016000508281548110156100025790600052602060002090600502016000506000820151816000016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610b4557805160ff19168380011785555b50610b759291506108ab565b505060028101805460ff1916905560006003820181905560048201556001015b8082111561097257600060008201600050805460018160011615610100020316600290046000825580601f10610b0957505b5060018201600050805460018160011615610100020316600290046000825580601f10610b275750610a8a565b601f016020900490600052602060002090810190610adc91906108ab565b601f016020900490600052602060002090810190610a8a91906108ab565b82800160010185558215610a7e579182015b82811115610a7e578251826000505591602001919060010190610b57565b50506020820151816001016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610bd457805160ff19168380011785555b50610c049291506108ab565b82800160010185558215610bc8579182015b82811115610bc8578251826000505591602001919060010190610be6565b505060408281015160028301805460ff1916909117905560608301516003830155608092909201516004919091015551429082907f8baba1305291ce5789b342eddc456ab24d87be77eba1ead28ecabf369ffa01de90600090a3505050565b600160016000508281548110156100025750506000819052600591909102600080516020610ec083398151915201805460ff19169091179055565b820191906000526020600020905b815481529060010190602001808311610cac57829003601f168201915b5050604080518954602060026001831615610100026000190190921691909104601f8101829004820283018201909352828252959a50948994509092508401905082828015610d595780601f10610d2e57610100808354040283529160200191610d59565b820191906000526020600020905b815481529060010190602001808311610d3c57829003601f168201915b50505050509350955095509550955095505091939590929450565b600180548390811015610002575060005260058202600080516020610ec0833981519152015460ff1615610da757610002565b80600160005083815481101561000257600091825260058102600080516020610f00833981519152018054909301909255604051429250839185917f4afc0c4a7e859097234668139d50da87bb3c04c5c26fc8ed8d138ef6e764de9a9190a45050565b600180548390811015610002575060005260058202600080516020610ec0833981519152015460ff1615610e3d57610002565b80600160005083815481101561000257600091825260058102600080516020610ea0833981519152018054909301909255604051429250839185917f870a98f3ad1c16abc2a2adc6687d763aefcb76bb03f35c9d93d29bd55cdc310d9190a4505056b10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cfab10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf8b10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6b10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf96060604052604051606080610b2983395060c06040525160805160a051600160a060020a0332166000908152600360205260408120805460ff191660019081179091558154600160a060020a0319908116861790925580548216841790556002805490911682179055505050610ab0806100796000396000f3606060405236156100b95760e060020a60003504631bf6912d81146100bb5780632f6da7bb14610107578063352d722f1461018c5780634f6765d7146101e75780635b28e445146101f95780635ef00f18146102575780636386c1c7146102ba5780636d2d4bac146102e357806374db76b4146104845780639f795ca114610496578063a87430ba146104f9578063c72ef41f14610514578063d97b94e9146106c4578063f074347e146106d6578063f08762e214610739575b005b6100b960043560025460e060020a631bf6912d0260609081526064839052600160a060020a0390911690631bf6912d9060849060009060248183876161da5a03f1156100025750505050565b6100b960043560243560025460e160020a6351ce2f9f026060908152606484905260009182918291600160a060020a03169063a39c5f3e9060849060209060248187876161da5a03f11561000257505060405151935083905080610182575033600160a060020a031681526003602052604081205460ff1681145b156108c557610002565b6100b960043560025460e160020a6351ce2f9f0260609081526064839052600091600160a060020a03169063a39c5f3e9060849060209060248187876161da5a03f11561000257505060405151915050801561077257610002565b61075f600254600160a060020a031681565b6100b960043560243560025460e160020a6351ce2f9f0260609081526064849052600091600160a060020a03169063a39c5f3e9060849060209060248187876161da5a03f1156100025750506040515191505080156107e357610002565b6100b96004356001547f5ef00f180000000000000000000000000000000000000000000000000000000060609081526064839052600160a060020a039190911690635ef00f189060849060009060248183876161da5a03f1156100025750505050565b600160a060020a036004351660009081526003602052604090205460ff165b6060908152602090f35b60206004803580820135601f8101849004909302608090810160405260608481526100b99460249391929184019181908382808284375050604080516020601f8935808c01359182018390048302840183019094528083529799986044989297509290920194509250829150840183828082843750949650505050505050600254604080517f6d2d4bac0000000000000000000000000000000000000000000000000000000081526004818101928352855160448301528551600160a060020a039490941693636d2d4bac93879387939192839260248301926064019160809181908490829085906000906020601f850104600f02600301f150905090810190601f1680156104065780820380516001836020036101000a031916815260200191505b508381038252848181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561045f5780820380516001836020036101000a031916815260200191505b509450505050506000604051808303816000876161da5a03f115610002575050505050565b61075f600054600160a060020a031681565b6100b96004356001547f5e823d960000000000000000000000000000000000000000000000000000000060609081526064839052600160a060020a039190911690635e823d969060849060009060248183876161da5a03f1156100025750505050565b6102d960043560036020526000908152604090205460ff1681565b6080602060248035600481810135601f8101859004909402850160405260608481526100b9958235959294604494929392019190819083828082843750506040805160209735808a0135601f81018a90048a0283018a019093528282529698976064979196506024919091019450909250829150840183828082843750506002546040517fc72ef41f0000000000000000000000000000000000000000000000000000000081528089018b8152602482018b81528b51998301999099528a519799600160a060020a03939093169863c72ef41f988d98508c97508b96509194509260448301926084019160809181908490829085906000906003600f6020601f8701040201f150905090810190601f1680156106445780820380516001836020036101000a031916815260200191505b508381038252848181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561069d5780820380516001836020036101000a031916815260200191505b50955050505050506000604051808303816000876161da5a03f11561000257505050505050565b61075f600154600160a060020a031681565b6100b96004356001547ff074347e0000000000000000000000000000000000000000000000000000000060609081526064839052600160a060020a03919091169063f074347e9060849060009060248183876161da5a03f1156100025750505050565b6002805473ffffffffffffffffffffffffffffffffffffffff19166004351790556100b9565b600160a060020a03166060908152602090f35b604080516002547f35960812000000000000000000000000000000000000000000000000000000008252600482018590523460248301529151600160a060020a039290921691633596081291604481810192600092909190829003018183876161da5a03f115610002575050505050565b604080516002547f5b28e44500000000000000000000000000000000000000000000000000000000825260048201869052602482018590529151600160a060020a039290921691635b28e44591604481810192600092909190829003018183876161da5a03f115610002575050600154604080517fa9059cbb00000000000000000000000000000000000000000000000000000000815230600160a060020a03908116600483015260248201879052915192909116925063a9059cbb916044828101926000929190829003018183876161da5a03f11561000257505050505050565b600260009054906101000a9004600160a060020a0316600160a060020a031663cacb4f16866040518260e060020a028152600401808281526020019150506040604051808303816000876161da5a03f115610002575050604080518051602082015160025460e060020a631bf6912d028452600484018b9052935191965094600160a060020a03939093169350631bf6912d92602483810193919291829003018183876161da5a03f115610002575050506000811115610a5d57600154604080517f18160ddd00000000000000000000000000000000000000000000000000000000815290518392600160a060020a0316916318160ddd91600482810192602092919082900301816000876161da5a03f115610002575050506040518051906020015010156109f357610002565b600160009054906101000a9004600160a060020a0316600160a060020a031663a9059cbb85836040518360e060020a0281526004018083600160a060020a03168152602001828152602001925050506000604051808303816000876161da5a03f115610002575050505b808285600160a060020a03167fbf334802c86a270265a8ca2656b2bff943a5f2a75b3adaf4b282052663bb6624306040518082600160a060020a0316815260200191505060405180910390a4505050505056",
    unlinked_binary: "606060405261223f806100126000396000f3606060405260e060020a600035046304291e7281146100475780636b46fdc01461007657806395948c8b146100a3578063cd6d718a1461010f578063f794477c14610130575b005b600435600090815260208190526040902054600160a060020a03165b600160a060020a03166060908152602090f35b61004560043560008181526020819052604081205481908190600160a060020a0316811461014257610002565b6100456004356000818152602081905260409020805473ffffffffffffffffffffffffffffffffffffffff19169055606081815232600160a060020a03166080524260a0527f2608970b92b570ff563c1e03a8bd72bb89934b29c812a59061ce82327f9e88399080a150565b610063600435600060208190529081526040902054600160a060020a031681565b610063600154600160a060020a031681565b606061057a80610258833901809050604051809103906000f09250604051610f44806107d2833901809050604051809103906000f09150308383604051610b29806117168339018084600160a060020a0316815260200183600160a060020a0316815260200182600160a060020a031681526020019350505050604051809103906000f09050806000600050600086815260200190815260200160002060006101000a815481600160a060020a03021916908302179055507ed2ffbf5d5af9df69470d5d96be685959b58c0a366f4a8b6ff02afb4d95c8868132426040518084600160a060020a0316815260200183600160a060020a03168152602001828152602001935050505060405180910390a15050505056606060405260008054600160a060020a03191633179055610556806100246000396000f3606060405236156100a35760e060020a6000350463095ea7b381146100ab57806318160ddd146100c357806323b872dd146100d15780634a79d50c146100ed5780635e823d96146100f65780635ef00f181461010a57806370a08231146101245780638da5cb5b1461014857806395d89b411461015a578063a6f9dae114610169578063a9059cbb1461018b578063dd62ed3e146101a4578063f074347e146101d4575b610122610002565b6101226004356024356001548111156104e057610002565b6001545b6060908152602090f35b610122600435602435604435828180600014156102e557610002565b6100c760025481565b610122600435806000141561053957610002565b6003805463ffffffff191660e060020a600435041790555b005b6100c7600435600160a060020a038116600090815260046020526040902054919050565b6100c7600054600160a060020a031681565b6100c760035460e060020a0281565b610122600435600054600160a060020a0390811633909116146101df57610002565b6101226004356024353381806000141561025457610002565b600160a060020a0360043581166000908152600560209081526040808320602435909416835292905220546100c7565b600435600255610122565b80600160a060020a0316600014156101f657610002565b600054426060908152600160a060020a038084169216907f4c37b24b600916176446859ec41fb06842ec1dfaeeb0bee28784b51f24b8c30890602090a380600060006101000a815481600160a060020a030219169083021790555050565b600160a060020a0382166000908152600460205260409020548190101561027a57610002565b604060002054808201101561028e57610002565b6040600081812080548490039055600160a060020a03808716808352928220805485019055839291908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906060a450505050565b600160a060020a0382166000908152600460205260409020548190101561030b57610002565b604060002054818101101561031f57610002565b8483806000141561032f57610002565b600560209081526040600081812033600160a060020a031682529092529020548190101561035c57610002565b6005600050600083600160a060020a03168152602001908152602001600020600050600033600160a060020a0316815260200190815260200160002060005054816005600050600085600160a060020a03168152602001908152602001600020600050600033600160a060020a03168152602001908152602001600020600050540110156103e957610002565b846004600050600089600160a060020a03168152602001908152602001600020600082828250540392505081905550846004600050600088600160a060020a03168152602001908152602001600020600082828250540192505081905550846005600050600089600160a060020a03168152602001908152602001600020600050600033600160a060020a031681526020019081526020016000206000828282505403925050819055508486600160a060020a031688600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405180905060405180910390a450505050505050565b33600160a060020a039081166000818152600560209081526040808320948716808452949091528120849055839291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906060a45050565b60015481018190101561054b57610002565b60018054820190555056606060405260008054600160a060020a03191633179055610f20806100246000396000f3606060405236156100a35760e060020a600035046306661abd81146100a55780631bf6912d146100bb5780631d65e77e146100f457806335960812146102145780635b28e445146102635780636d2d4bac146102b25780638d9776721461036c5780638da5cb5b146103fb578063a39c5f3e1461040d578063a6f9dae114610444578063c72ef41f14610465578063cacb4f1614610521578063f125c1dc1461056d575b005b6001545b60408051918252519081900360200190f35b6100a36004356001805482908110156100025750600052600080516020610ec083398151915260058202015460ff1615610c6357610002565b61057e6004356020604051908101604052806000815260200150602060405190810160405280600081526020015060006000600060006001600050878154811015610002575090819052600080516020610ea08339815191526005880290810154600080516020610ec0833981519152820154600080516020610f00833981519152830154600080516020610ee083398151915284018054604080516020600299841615610100026000190190931698909804601f8101839004830289018301909152808852919687967fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf7019560ff9590951694929091879190830182828015610cc95780601f10610c9e57610100808354040283529160200191610cc9565b6100a3600435602435600180548390811015610002575080546000829052600080516020610f0083398151915260058502015491839185908110156100025750505080820111610d7457610002565b6100a3600435602435600180548390811015610002575080546000829052600080516020610ea083398151915260058502015491839185908110156100025750505080820111610e0a57610002565b6040805160206004803580820135601f81018490048402850184019095528484526100a394919360249390929184019190819084018382808284375050604080516020601f8935808c0135918201839004830284018301909452808352979998604498929750929092019450925082915084018382808284375094965050505050505060018054808201808355600092908280158290116109da576005028160050283600052602060002091820191016109da9190610aaa565b6106606004356001805482908110156100025750600052600080516020610ec0833981519152600590910290810154600080516020610ea0833981519152820154600080516020610f00833981519152830154600080516020610ee08339815191528401937fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf7019260ff169185565b61077c600054600160a060020a031681565b6100a96004356000600160005082815481101561000257509052600080516020610ec083398151915260058202015460ff16610579565b6100a360043560005433600160a060020a039081169116146107b157610002565b60408051602060248035600481810135601f81018590048502860185019096528585526100a39581359591946044949293909201918190840183828082843750506040805160209735808a0135601f81018a90048a0283018a0190935282825296989760649791965060249190910194509092508291508401838280828437509496505050505050506001805484908110156100025750600052600080516020610ec083398151915260058402015460ff161561082e57610002565b6107986004356000600060006001600050848154811015610002575090525050600502600080516020610f00833981519152810154600080516020610ea0833981519152909101549091565b6100a960043560015481105b919050565b6040518080602001806020018681526020018581526020018481526020018381038352888181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156105f45780820380516001836020036101000a031916815260200191505b508381038252878181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561064d5780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b60408051908101849052606081018390526080810182905260a08082528654600260018216156101000260001901909116049082018190528190602082019060c0830190899080156106f35780601f106106c8576101008083540402835291602001916106f3565b820191906000526020600020905b8154815290600101906020018083116106d657829003601f168201915b5050838103825287546002600182161561010002600019019091160480825260209190910190889080156107685780601f1061073d57610100808354040283529160200191610768565b820191906000526020600020905b81548152906001019060200180831161074b57829003601f168201915b505097505050505050505060405180910390f35b60408051600160a060020a039092168252519081900360200190f35b6040805192835260208301919091528051918290030190f35b80600160a060020a0316600014156107c857610002565b604080516000544282529151600160a060020a038085169316917f4c37b24b600916176446859ec41fb06842ec1dfaeeb0bee28784b51f24b8c308919081900360200190a380600060006101000a815481600160a060020a030219169083021790555050565b816001600050848154811015610002576000918252600502600080516020610ee08339815191520190506000016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106108bf57805160ff19168380011785555b506108ef9291505b8082111561097257600081556001016108ab565b828001600101855582156108a3579182015b828111156108a35782518260005055916020019190600101906108d1565b5050806001600050848154811015610002576000918252600502600080516020610ee08339815191520190506001016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061097657805160ff19168380011785555b506109a69291506108ab565b5090565b82800160010185558215610966579182015b82811115610966578251826000505591602001919060010190610988565b5050604051429084907fdab70597d373cb79eb5e0bd426044d0f0cc23546a038e03b64d9e3a4407f074c90600090a3505050565b505050905060a0604051908101604052808481526020018381526020016000815260200160008152602001600081526020015060016000508281548110156100025790600052602060002090600502016000506000820151816000016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610b4557805160ff19168380011785555b50610b759291506108ab565b505060028101805460ff1916905560006003820181905560048201556001015b8082111561097257600060008201600050805460018160011615610100020316600290046000825580601f10610b0957505b5060018201600050805460018160011615610100020316600290046000825580601f10610b275750610a8a565b601f016020900490600052602060002090810190610adc91906108ab565b601f016020900490600052602060002090810190610a8a91906108ab565b82800160010185558215610a7e579182015b82811115610a7e578251826000505591602001919060010190610b57565b50506020820151816001016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610bd457805160ff19168380011785555b50610c049291506108ab565b82800160010185558215610bc8579182015b82811115610bc8578251826000505591602001919060010190610be6565b505060408281015160028301805460ff1916909117905560608301516003830155608092909201516004919091015551429082907f8baba1305291ce5789b342eddc456ab24d87be77eba1ead28ecabf369ffa01de90600090a3505050565b600160016000508281548110156100025750506000819052600591909102600080516020610ec083398151915201805460ff19169091179055565b820191906000526020600020905b815481529060010190602001808311610cac57829003601f168201915b5050604080518954602060026001831615610100026000190190921691909104601f8101829004820283018201909352828252959a50948994509092508401905082828015610d595780601f10610d2e57610100808354040283529160200191610d59565b820191906000526020600020905b815481529060010190602001808311610d3c57829003601f168201915b50505050509350955095509550955095505091939590929450565b600180548390811015610002575060005260058202600080516020610ec0833981519152015460ff1615610da757610002565b80600160005083815481101561000257600091825260058102600080516020610f00833981519152018054909301909255604051429250839185917f4afc0c4a7e859097234668139d50da87bb3c04c5c26fc8ed8d138ef6e764de9a9190a45050565b600180548390811015610002575060005260058202600080516020610ec0833981519152015460ff1615610e3d57610002565b80600160005083815481101561000257600091825260058102600080516020610ea0833981519152018054909301909255604051429250839185917f870a98f3ad1c16abc2a2adc6687d763aefcb76bb03f35c9d93d29bd55cdc310d9190a4505056b10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cfab10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf8b10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6b10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf96060604052604051606080610b2983395060c06040525160805160a051600160a060020a0332166000908152600360205260408120805460ff191660019081179091558154600160a060020a0319908116861790925580548216841790556002805490911682179055505050610ab0806100796000396000f3606060405236156100b95760e060020a60003504631bf6912d81146100bb5780632f6da7bb14610107578063352d722f1461018c5780634f6765d7146101e75780635b28e445146101f95780635ef00f18146102575780636386c1c7146102ba5780636d2d4bac146102e357806374db76b4146104845780639f795ca114610496578063a87430ba146104f9578063c72ef41f14610514578063d97b94e9146106c4578063f074347e146106d6578063f08762e214610739575b005b6100b960043560025460e060020a631bf6912d0260609081526064839052600160a060020a0390911690631bf6912d9060849060009060248183876161da5a03f1156100025750505050565b6100b960043560243560025460e160020a6351ce2f9f026060908152606484905260009182918291600160a060020a03169063a39c5f3e9060849060209060248187876161da5a03f11561000257505060405151935083905080610182575033600160a060020a031681526003602052604081205460ff1681145b156108c557610002565b6100b960043560025460e160020a6351ce2f9f0260609081526064839052600091600160a060020a03169063a39c5f3e9060849060209060248187876161da5a03f11561000257505060405151915050801561077257610002565b61075f600254600160a060020a031681565b6100b960043560243560025460e160020a6351ce2f9f0260609081526064849052600091600160a060020a03169063a39c5f3e9060849060209060248187876161da5a03f1156100025750506040515191505080156107e357610002565b6100b96004356001547f5ef00f180000000000000000000000000000000000000000000000000000000060609081526064839052600160a060020a039190911690635ef00f189060849060009060248183876161da5a03f1156100025750505050565b600160a060020a036004351660009081526003602052604090205460ff165b6060908152602090f35b60206004803580820135601f8101849004909302608090810160405260608481526100b99460249391929184019181908382808284375050604080516020601f8935808c01359182018390048302840183019094528083529799986044989297509290920194509250829150840183828082843750949650505050505050600254604080517f6d2d4bac0000000000000000000000000000000000000000000000000000000081526004818101928352855160448301528551600160a060020a039490941693636d2d4bac93879387939192839260248301926064019160809181908490829085906000906020601f850104600f02600301f150905090810190601f1680156104065780820380516001836020036101000a031916815260200191505b508381038252848181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561045f5780820380516001836020036101000a031916815260200191505b509450505050506000604051808303816000876161da5a03f115610002575050505050565b61075f600054600160a060020a031681565b6100b96004356001547f5e823d960000000000000000000000000000000000000000000000000000000060609081526064839052600160a060020a039190911690635e823d969060849060009060248183876161da5a03f1156100025750505050565b6102d960043560036020526000908152604090205460ff1681565b6080602060248035600481810135601f8101859004909402850160405260608481526100b9958235959294604494929392019190819083828082843750506040805160209735808a0135601f81018a90048a0283018a019093528282529698976064979196506024919091019450909250829150840183828082843750506002546040517fc72ef41f0000000000000000000000000000000000000000000000000000000081528089018b8152602482018b81528b51998301999099528a519799600160a060020a03939093169863c72ef41f988d98508c97508b96509194509260448301926084019160809181908490829085906000906003600f6020601f8701040201f150905090810190601f1680156106445780820380516001836020036101000a031916815260200191505b508381038252848181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561069d5780820380516001836020036101000a031916815260200191505b50955050505050506000604051808303816000876161da5a03f11561000257505050505050565b61075f600154600160a060020a031681565b6100b96004356001547ff074347e0000000000000000000000000000000000000000000000000000000060609081526064839052600160a060020a03919091169063f074347e9060849060009060248183876161da5a03f1156100025750505050565b6002805473ffffffffffffffffffffffffffffffffffffffff19166004351790556100b9565b600160a060020a03166060908152602090f35b604080516002547f35960812000000000000000000000000000000000000000000000000000000008252600482018590523460248301529151600160a060020a039290921691633596081291604481810192600092909190829003018183876161da5a03f115610002575050505050565b604080516002547f5b28e44500000000000000000000000000000000000000000000000000000000825260048201869052602482018590529151600160a060020a039290921691635b28e44591604481810192600092909190829003018183876161da5a03f115610002575050600154604080517fa9059cbb00000000000000000000000000000000000000000000000000000000815230600160a060020a03908116600483015260248201879052915192909116925063a9059cbb916044828101926000929190829003018183876161da5a03f11561000257505050505050565b600260009054906101000a9004600160a060020a0316600160a060020a031663cacb4f16866040518260e060020a028152600401808281526020019150506040604051808303816000876161da5a03f115610002575050604080518051602082015160025460e060020a631bf6912d028452600484018b9052935191965094600160a060020a03939093169350631bf6912d92602483810193919291829003018183876161da5a03f115610002575050506000811115610a5d57600154604080517f18160ddd00000000000000000000000000000000000000000000000000000000815290518392600160a060020a0316916318160ddd91600482810192602092919082900301816000876161da5a03f115610002575050506040518051906020015010156109f357610002565b600160009054906101000a9004600160a060020a0316600160a060020a031663a9059cbb85836040518360e060020a0281526004018083600160a060020a03168152602001828152602001925050506000604051808303816000876161da5a03f115610002575050505b808285600160a060020a03167fbf334802c86a270265a8ca2656b2bff943a5f2a75b3adaf4b282052663bb6624306040518082600160a060020a0316815260200191505060405180910390a4505050505056",
    address: "0xd1ecd01a06ccb7658042971afbab6dcd14d55db1",
    generated_with: "2.0.6",
    contract_name: "Parent"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Parent error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("Parent error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Parent error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Parent error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Parent = Contract;
  }

})();
