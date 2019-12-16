import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Card, Body, Right, Icon } from "native-base";
import { SCREEN_WIDTH } from '@/styles/dimensions';
import appStyle from '@/styles/appStyle';
import { TextBold, TextLight } from '@/components/Text';
import { colorTitle, disable, colorPrice } from '@/styles/color';
import { Helper } from '@/utils/Helper';
interface IAppProps {
    item?: any;
    index?: number;
    noShadow?:boolean;
}

const ItemLeftImage = ({
    item,
    index,
    noShadow
}: IAppProps) => (
        <Card style={[styles.card, index == 0 && { marginTop: 10 },
         !noShadow &&styles.shadow]}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.leftImage}>
                    <Image style={appStyle.image} source={item.image} />
                </View>
                <Body style={styles.body}>
                    <TextBold style={{
                        fontSize: 17,
                        color: colorTitle,
                        lineHeight: 22
                    }}>
                        {item.title}
                    </TextBold>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 5,
                        marginBottom: 10,
                        alignItems: 'flex-end'
                    }}>
                        <Icon style={{
                            fontSize: 15,
                            color: disable,
                        }}
                            name='location-on'
                            type='MaterialIcons' />
                        <TextLight style={{
                            fontSize: 15,
                            color: disable,
                            marginLeft: 5
                        }} >
                            {item.address}
                        </TextLight>
                    </View>
                    <TextLight style={{ fontSize: 17, color: colorPrice }}>
                        <TextBold style={{ fontSize: 23 }}>{Helper.formater_round_vnd(item.price)}</TextBold> đ
                    </TextLight>
                </Body>
                <Right style={{ flex: 0, alignSelf: 'flex-start', marginTop: 5 }}>
                    {item.like ?
                        <Icon style={{ fontSize: 18, color: '#fb767d' }} name='heart' type="FontAwesome" /> :

                        <Icon style={{ fontSize: 18, color: '#c2c2c2' }} name='heart-o' type="FontAwesome" />
                    }
                </Right>
            </View>
        </Card>
    );



export default (React.memo(ItemLeftImage));



const styles = StyleSheet.create({
    card: {
        width: SCREEN_WIDTH * 0.9,
        padding: 10,
        borderRadius: 12,
        marginBottom: 15,
        // elevation: 0,
        alignSelf: 'center'
    },
    shadow:{
        shadowColor: "#2492812E",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 22,
        elevation: 2,
    },
    leftImage: {
        width: SCREEN_WIDTH * 0.35,
        aspectRatio: 390 / 312,
        borderRadius: 6,
        overflow: 'hidden'
    },
    body: {
        alignSelf: 'flex-start',
        paddingHorizontal: 5,
        alignItems: 'flex-start'
    },
})
