{
  lawData?.length ? (
    isDetail && sentencingData.title !== 'hi' ? (
      <Detail />
    ) : (
      <View style={{flex: 1}}>
        <View style={{flex: 6}}>
          <SearchList laws={lawData} setIsDetail={setIsDetail} />
        </View>
        {/* {lawData.map(law =>(<SearchList law={law} etIsDetail={setIsDetail} />))} */}

        {/* <View style={styles.analysis__button}> */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.analysis__button}>
            <Text style={styles.analysis__button__text}>분석하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  ) : (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={styles.mainText}>키워드를 입력해 주세요</Text>
    </View>
  );
}
