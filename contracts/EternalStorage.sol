contract EternalStorage {

    function EternalStorage(){

    }

    ////////////
    //UInt
    ////////////

    mapping(bytes32 => uint) UIntStorage;

    function getUIntValue(bytes32 record) constant returns (uint){
        return UIntStorage[record];
    }

    function setUIntValue(bytes32 record, uint value)
    {
        UIntStorage[record] = value;
    }

    function deleteUIntValue(bytes32 record)
    {
      delete UIntStorage[record];
    }

    ////////////
    //Strings
    ////////////

    mapping(bytes32 => string) StringStorage;

    function getStringValue(bytes32 record) constant returns (string){
        return StringStorage[record];
    }

    function setStringValue(bytes32 record, string value)
    {
        StringStorage[record] = value;
    }

    function deleteStringValue(bytes32 record)
    {
      delete StringStorage[record];
    }

    ////////////
    //Address
    ////////////

    mapping(bytes32 => address) AddressStorage;

    function getAddressValue(bytes32 record) constant returns (address){
        return AddressStorage[record];
    }

    function setAddressValue(bytes32 record, address value)
    {
        AddressStorage[record] = value;
    }

    function deleteAddressValue(bytes32 record)
    {
      delete AddressStorage[record];
    }

    ////////////
    //Bytes
    ////////////

    mapping(bytes32 => bytes) BytesStorage;

    function getBytesValue(bytes32 record) constant returns (bytes){
        return BytesStorage[record];
    }

    function setBytesValue(bytes32 record, bytes value)
    {
        BytesStorage[record] = value;
    }

    function deleteBytesValue(bytes32 record)
    {
      delete BytesStorage[record];
    }

    ////////////
    //Bytes32
    ////////////

    mapping(bytes32 => bytes32) Bytes32Storage;

    function getBytes32Value(bytes32 record) constant returns (bytes32){
        return Bytes32Storage[record];
    }

    function setBytes32Value(bytes32 record, bytes32 value)
    {
        Bytes32Storage[record] = value;
    }

    function deleteBytes32Value(bytes32 record)
    {
      delete Bytes32Storage[record];
    }

    ////////////
    //Boolean
    ////////////

    mapping(bytes32 => bool) BooleanStorage;

    function getBooleanValue(bytes32 record) constant returns (bool){
        return BooleanStorage[record];
    }

    function setBooleanValue(bytes32 record, bool value)
    {
        BooleanStorage[record] = value;
    }

    function deleteBooleanValue(bytes32 record)
    {
      delete BooleanStorage[record];
    }

    ////////////
    //Int
    ////////////
    mapping(bytes32 => int) IntStorage;

    function getIntValue(bytes32 record) constant returns (int){
        return IntStorage[record];
    }

    function setIntValue(bytes32 record, int value)
    {
        IntStorage[record] = value;
    }

    function deleteIntValue(bytes32 record)
    {
      delete IntStorage[record];
    }

}
