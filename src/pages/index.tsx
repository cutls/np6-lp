import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Icon,
	Image,
	Link,
	Stack,
	Text,
	VStack,
	useColorMode,
	IconButton,
	SimpleGrid,
	Center,
} from "@chakra-ui/react";
import { BsAppleMusic, BsSpotify } from "react-icons/bs";
import Head from "next/head";
import { MoonIcon, SunIcon, DownloadIcon } from "@chakra-ui/icons";

export default function Home() {
	const { colorMode, toggleColorMode } = useColorMode();
	const version = "1.2.1";
	const link =
		`https://github.com/cutls/np6-lp/releases/download/v${version}/np6-v${version}.zip`

	return (
		<Box>
			<Head>
				<title>np6 - NowPlaying with Mastodon for macOS</title>
				<meta
					name="description"
					content="NowPlaying to Mastodon from Apple Music and Spotify with np6 on macOS."
				/>
				<link rel="icon" href="/16.png" />
			</Head>

			{/* Navigation */}
			<Box as="nav" py={4} px={8}>
				<Container maxW="container.xl">
					<Flex justify="space-between" align="center">
						<Flex align="center" gap={2}>
							<Image src="/64.png" alt="np6 logo" w="32px" h="32px" />
							<Heading size="md" fontWeight="bold">
								np6
							</Heading>
						</Flex>
						<Flex align="center" gap={4}>
							<IconButton
								aria-label="Toggle color mode"
								icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
								onClick={toggleColorMode}
								variant="ghost"
							/>
							<Button
								as="a"
								href={link}
								colorScheme="blue"
								borderRadius="full"
								size="sm"
								leftIcon={<DownloadIcon />}
							>
								Download (v{version})
							</Button>
						</Flex>
					</Flex>
				</Container>
			</Box>

			{/* Hero Section */}
			<Box pt={20} pb={20}>
				<Container maxW="container.md">
					<VStack spacing={8} textAlign="center">
						<Image
							src="/1024.png"
							alt="np6 Icon"
							w="180px"
							h="180px"
							borderRadius="36px"
							boxShadow="2xl"
						/>
						<Stack spacing={4}>
							<Heading
								as="h1"
								size="3xl"
								fontWeight="black"
								letterSpacing="tight"
							>
								np6
							</Heading>
							<Flex justify="center" align="center" mb={5}>
								<Text fontSize="2xl" fontWeight="bold">
									for
								</Text>
								<Box w={2} />
								<BsAppleMusic size={30} />
								<Box w={2} />
								<BsSpotify size={30} />
							</Flex>
							<Text fontSize="xl" color="gray.500" fontWeight="medium">
								v{version}
							</Text>
							<Text fontSize="xl" color="gray.500" fontWeight="medium">
								A lightweight, NowPlaying client of Mastodon for macOS. Good for
								Apple Music and Spotify.
							</Text>
						</Stack>
						<Stack direction={{ base: "column", sm: "row" }} spacing={4}>
							<Button
								as="a"
								href={link}
								size="lg"
								colorScheme="blue"
								px={8}
								borderRadius="full"
								leftIcon={<DownloadIcon />}
							>
								Download for macOS
							</Button>
						</Stack>
						<Text fontSize="xs" color="gray.400">
							Version 1.0.0 • Requires macOS 12.0 or later
						</Text>
					</VStack>
				</Container>
			</Box>

			{/* Screenshot Section */}
			<Box bg={colorMode === "light" ? "gray.50" : "gray.900"} py={20}>
				<Container maxW="container.xl">
					<Center>
						<Image
							src="/np6-ss.png"
							alt="np6 Screenshot"
							borderRadius="xl"
							boxShadow="2xl"
							maxW="300px"
							border="4px solid"
							borderColor={colorMode === "light" ? "white" : "gray.800"}
						/>
					</Center>
				</Container>
			</Box>

			{/* Features Section */}
			<Box py={20}>
				<Container maxW="container.lg">
					<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
						<VStack
							align="center"
							spacing={4}
							p={6}
							borderRadius="xl"
							bg={colorMode === "light" ? "white" : "gray.800"}
							boxShadow="sm"
						>
							<BsAppleMusic size={40} />
							<Heading size="md">Apple Music</Heading>
							<Text color="gray.500">Native integration with Apple Music.</Text>
						</VStack>
						<VStack
							align="center"
							spacing={4}
							p={6}
							borderRadius="xl"
							bg={colorMode === "light" ? "white" : "gray.800"}
							boxShadow="sm"
						>
							<BsSpotify size={40} />
							<Heading size="md">Spotify</Heading>
							<Text color="gray.500">
								Full Spotify support. Play by your phone, NowPlaying by your
								Mac.
							</Text>
						</VStack>
					</SimpleGrid>
				</Container>
			</Box>

			{/* CTA Section */}
			<Box py={20} textAlign="center">
				<Container maxW="container.md">
					<VStack spacing={6}>
						<Heading size="lg">Ready to start NowPlaying?</Heading>
						<Button
							as="a"
							href={link}
							size="lg"
							colorScheme="blue"
							px={12}
							borderRadius="full"
						>
							Download v{version}
						</Button>
					</VStack>
				</Container>
			</Box>

			{/* Footer */}
			<Box
				as="footer"
				py={10}
				borderTop="1px solid"
				borderColor={colorMode === "light" ? "gray.100" : "gray.800"}
			>
				<Container maxW="container.xl">
					<Flex
						direction={{ base: "column", md: "row" }}
						justify="space-between"
						align="center"
						gap={4}
					>
						<Flex align="center">
							<Text color="gray.500" fontSize="sm">
								Most of all code was generated by Generative AI
							</Text>
						</Flex>
						<Text color="gray.500" fontSize="sm">
							© 2026 cutls. All rights reserved.
						</Text>
					</Flex>
				</Container>
			</Box>
		</Box>
	);
}
