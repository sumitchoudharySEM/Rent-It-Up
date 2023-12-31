import { BoxProps, HStack, Icon, Text, Tooltip } from "@chakra-ui/react"

interface Props extends BoxProps {
  description: React.ReactNode
  title: string
  icon: any
  suffix?: React.ReactNode
  onClick?: () => void
  showTooltop?: boolean
}

export const WalletGridBox = ({
  description,
  title,
  icon,
  suffix,
  onClick,
  showTooltop,
}: Props) => {
  return (
    <HStack
      spacing="4"
      p={{ base: "1rem", md: "2rem 3.5rem" }}
      shadow="black"
      flex="50%"
      rounded="md"
      borderRadius="md" // Add borderRadius property
      boxShadow="0 0 8 2 black"
      flexDir={{ base: "column", md: "row" }}
      alignItems={{ base: "flex-start", md: "center" }}
      justifyContent={{ base: "flex-start", md: "space-between" }}
      w="full"
      onClick={onClick}
      _hover={{
        ".noText": { color: "black" },
        ".icon": { color: "black" },
        bgColor: "#F0EAEA",
        color: "black",
        boxShadow: "0 0 8px 2px #1da1f2",
      }}
    >
      <HStack spacing="4" w="fit-content">
        <Icon className="icon" color="black" boxSize="6" as={icon} />
        <Text className="noText" fontSize="md" textColor="black" fontWeight="semibold" whiteSpace="pre-wrap">
          {title}
        </Text>
      </HStack>

      <HStack spacing="4" alignItems={"center"} maxW="50%">
        <Tooltip label={description} isDisabled={!showTooltop} hasArrow placement="top">
          <Text fontSize="md" fontWeight="black" noOfLines={1}>
            {description}
          </Text>
        </Tooltip>
        {suffix}
      </HStack>
    </HStack>
  )
}

