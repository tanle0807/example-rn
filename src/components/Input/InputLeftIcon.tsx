import React, { useState } from "react";
import {
    TextInputProps, TouchableOpacity
} from "react-native";
import { Icon, Item, Input, View } from "native-base";
import { placeholder, colorTitle, colorInput } from '@/styles/color';
import { PasswordSvg } from "@/assets/svg";
import { TextLight } from "../Text";

interface inputProps extends TextInputProps {
    label?: string;
    iconLeft?: React.ReactNode;
    isShowPass?: Boolean;
    value?: string;
    disableView?: boolean;
}

const InputLeftIcon = React.forwardRef(({
    label,
    iconLeft,
    style,
    value,
    isShowPass,
    disableView,
    ...props
}: inputProps,
    ref: any
) => {
    let [showPasss, setShowPass] = useState(true);
    return (
        <View style={{ marginBottom: 20 }}>
            <TextLight style={{ fontSize: 17, color: colorTitle, marginBottom: 10 }}>{label}</TextLight>
            <Item rounded style={{ paddingLeft: 20, paddingRight: 10, backgroundColor: '#EEF4F3', borderColor: '#EEF4F3' }}>
                {/* <PasswordSvg />*/}
                {iconLeft}
                <Input
                    style={{ fontSize: 17, color: colorInput, fontFamily: 'text-light' }}
                    placeholderTextColor={placeholder}
                    secureTextEntry={isShowPass ? showPasss : false}
                    {...props} />
                {isShowPass && (
                    <TouchableOpacity
                        onPress={() => {
                            setShowPass((showPasss = !showPasss));
                        }}
                    >
                        {showPasss ? (
                            <Icon
                                name="eye"
                                type="FontAwesome5"
                                style={{
                                    color: placeholder,
                                    fontSize: 16,
                                }}
                            />
                        ) : (
                                <Icon
                                    name="eye-slash"
                                    type="FontAwesome5"
                                    style={{
                                        color: placeholder,
                                        fontSize: 16,
                                    }}
                                />
                            )}
                    </TouchableOpacity>
                )}
            </Item>
        </View>
    );
}
);

export default InputLeftIcon;
