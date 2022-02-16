import React from "react";
var allCategoryThumbnailsVerySmall={"marriage" : "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxtYXJyaWFnZXxlbnwwfHx8fDE2NDQ4MzMzMjc&ixlib=rb-1.2.1&q=80&w=200",

"church" : "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxjaHVyY2h8ZW58MHx8fHwxNjQ0ODMzMzI3&ixlib=rb-1.2.1&q=80&w=200",

"keyboard" : "https://images.unsplash.com/photo-1587829741301-dc798b83add3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxrZXlib2FyZHxlbnwwfHx8fDE2NDQ4MzMzMjc&ixlib=rb-1.2.1&q=80&w=200",

"allergies" : "https://images.unsplash.com/photo-1529386317747-0a2a51add902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxhbGxlcmdpZXN8ZW58MHx8fHwxNjQ0ODM4NDM5&ixlib=rb-1.2.1&q=80&w=200",

"senate" : "https://images.unsplash.com/photo-1581097543550-b3cbe2e6ea6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxzZW5hdGV8ZW58MHx8fHwxNjQ0ODMzMzI3&ixlib=rb-1.2.1&q=80&w=200",

"power" : "https://images.unsplash.com/photo-1640622308069-4352d9b4dcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MXwxfHNlYXJjaHwxfHxwb3dlcnxlbnwwfHx8fDE2NDQ4Mzg0Mzk&ixlib=rb-1.2.1&q=80&w=200",

"books" : "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxib29rc3xlbnwwfHx8fDE2NDQ4MzMzMjc&ixlib=rb-1.2.1&q=80&w=200",

"security" : "https://images.unsplash.com/photo-1638913662295-9630035ef770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MXwxfHNlYXJjaHwxfHxzZWN1cml0eXxlbnwwfHx8fDE2NDQ4Mzg0Mzk&ixlib=rb-1.2.1&q=80&w=200",

"space" : "https://images.unsplash.com/photo-1537420327992-d6e192287183?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxzcGFjZXxlbnwwfHx8fDE2NDQ4Mzg0Mzk&ixlib=rb-1.2.1&q=80&w=200",

"faith" : "https://images.unsplash.com/photo-1533000759938-aa0ba70beceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxmYWl0aHxlbnwwfHx8fDE2NDQ4MzMzMjc&ixlib=rb-1.2.1&q=80&w=200",

"hiv" : "https://images.unsplash.com/photo-1631203884714-2eb146c2cccc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxoaXZ8ZW58MHx8fHwxNjQ0ODMzMzI3&ixlib=rb-1.2.1&q=80&w=200",

"nuclear" : "https://images.unsplash.com/photo-1517925035435-7976539b920d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxudWNsZWFyfGVufDB8fHx8MTY0NDgzODQzOQ&ixlib=rb-1.2.1&q=80&w=200",

"armenians" : "https://images.unsplash.com/photo-1600324839804-135dad3a3069?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxhcm1lbmlhbnN8ZW58MHx8fHwxNjQ0ODM4NDM5&ixlib=rb-1.2.1&q=80&w=200",

"operating systems" : "https://images.unsplash.com/photo-1579684385127-1ef15d508118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxvcGVyYXRpbmclMjBzeXN0ZW1zfGVufDB8fHx8MTY0NDgzMzMyNw&ixlib=rb-1.2.1&q=80&w=200",

"computer hardware" : "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGhhcmR3YXJlfGVufDB8fHx8MTY0NDgzODQzOQ&ixlib=rb-1.2.1&q=80&w=200",

"photography" : "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeXxlbnwwfHx8fDE2NDQ4Mzg0Mzk&ixlib=rb-1.2.1&q=80&w=200",

"government" : "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50fGVufDB8fHx8MTY0NDgzODQzOQ&ixlib=rb-1.2.1&q=80&w=200",

"administration" : "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxhZG1pbmlzdHJhdGlvbnxlbnwwfHx8fDE2NDQ4Mzg0Mzk&ixlib=rb-1.2.1&q=80&w=200",

"resurrection" : "https://images.unsplash.com/photo-1616593772516-a722638fbbdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxyZXN1cnJlY3Rpb258ZW58MHx8fHwxNjQ0ODM4NDM5&ixlib=rb-1.2.1&q=80&w=200",

"vision" : "https://images.unsplash.com/photo-1545935950-b7a28791ad7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHx2aXNpb258ZW58MHx8fHwxNjQ0ODMzMzI3&ixlib=rb-1.2.1&q=80&w=200",

"soldering" : "https://images.unsplash.com/photo-1592659762303-90081d34b277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxzb2xkZXJpbmd8ZW58MHx8fHwxNjQ0ODMzMzI3&ixlib=rb-1.2.1&q=80&w=200",

"computer mouse" : "https://images.unsplash.com/photo-1551515300-2d3b7bb80920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMG1vdXNlfGVufDB8fHx8MTY0NDgzODQzOQ&ixlib=rb-1.2.1&q=80&w=200",

"fonts" : "https://images.unsplash.com/photo-1566978862346-73282aa378a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxmb250c3xlbnwwfHx8fDE2NDQ4MzMzMjc&ixlib=rb-1.2.1&q=80&w=200",

"vehicles" : "https://images.unsplash.com/photo-1579653384681-c3ba17c4a8c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHx2ZWhpY2xlc3xlbnwwfHx8fDE2NDQ4MzMzMjc&ixlib=rb-1.2.1&q=80&w=200",

"doctors" : "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxkb2N0b3JzfGVufDB8fHx8MTY0NDgzODQzOQ&ixlib=rb-1.2.1&q=80&w=200",

"atmosphere" : "https://images.unsplash.com/photo-1540198163009-7afda7da2945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxhdG1vc3BoZXJlfGVufDB8fHx8MTY0NDgzODQzOQ&ixlib=rb-1.2.1&q=80&w=200",

"food" : "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTY0NDgzODQzOQ&ixlib=rb-1.2.1&q=80&w=200",

"fbi" : "https://images.unsplash.com/photo-1607940161649-a021a4b49d90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxmYml8ZW58MHx8fHwxNjQ0ODM4NDM5&ixlib=rb-1.2.1&q=80&w=200",

"drugs" : "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxkcnVnc3xlbnwwfHx8fDE2NDQ4Mzg0Mzk&ixlib=rb-1.2.1&q=80&w=200",

"console games" : "https://images.unsplash.com/photo-1605901309584-818e25960a8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxjb25zb2xlJTIwZ2FtZXN8ZW58MHx8fHwxNjQ0ODMzMzI3&ixlib=rb-1.2.1&q=80&w=200",

"atheism" : "https://images.unsplash.com/photo-1602677416440-51e91ddeef89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxhdGhlaXNtfGVufDB8fHx8MTY0NDgzODQzOQ&ixlib=rb-1.2.1&q=80&w=200",

"water" : "https://images.unsplash.com/photo-1553531384-2a97de235d45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MXwxfHNlYXJjaHwxfHx3YXRlcnxlbnwwfHx8fDE2NDQ4Mzg0Mzk&ixlib=rb-1.2.1&q=80&w=200",

"computer processors" : "https://images.unsplash.com/photo-1510746001195-0db09655b6db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHByb2Nlc3NvcnN8ZW58MHx8fHwxNjQ0ODM4NDM5&ixlib=rb-1.2.1&q=80&w=200",

"storage drives" : "https://images.unsplash.com/photo-1510853180832-3ec95c16627f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxzdG9yYWdlJTIwZHJpdmVzfGVufDB8fHx8MTY0NDgzMzMyNw&ixlib=rb-1.2.1&q=80&w=200",

"internet" : "https://images.unsplash.com/photo-1484807352052-23338990c6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxpbnRlcm5ldHxlbnwwfHx8fDE2NDQ4Mzg0Mzk&ixlib=rb-1.2.1&q=80&w=200",

"phone" : "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxwaG9uZXxlbnwwfHx8fDE2NDQ4MzMzMjc&ixlib=rb-1.2.1&q=80&w=200",

"recipe" : "https://images.unsplash.com/photo-1495521821757-a1efb6729352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxyZWNpcGV8ZW58MHx8fHwxNjQ0ODM4NDM5&ixlib=rb-1.2.1&q=80&w=200",

"geometry" : "https://images.unsplash.com/photo-1605106702842-01a887a31122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxnZW9tZXRyeXxlbnwwfHx8fDE2NDQ4Mzg0Mzk&ixlib=rb-1.2.1&q=80&w=200",

"prosecution" : "https://images.unsplash.com/photo-1589216532372-1c2a367900d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxwcm9zZWN1dGlvbnxlbnwwfHx8fDE2NDQ4Mzg0Mzk&ixlib=rb-1.2.1&q=80&w=200",

"narrative" : "https://images.unsplash.com/photo-1533130247874-1f1e93257d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxuYXJyYXRpdmV8ZW58MHx8fHwxNjQ0ODMzMzI3&ixlib=rb-1.2.1&q=80&w=200",

"religion" : "https://images.unsplash.com/photo-1520187044487-b2efb58f0cba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxyZWxpZ2lvbnxlbnwwfHx8fDE2NDQ4Mzg0Mzk&ixlib=rb-1.2.1&q=80&w=200",

"software piracy" : "https://images.unsplash.com/photo-1617777938240-9a1d8e51a47d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHBpcmFjeXxlbnwwfHx8fDE2NDQ4MzMzMjc&ixlib=rb-1.2.1&q=80&w=200",

"computer temprature" : "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHRlbXByYXR1cmV8ZW58MHx8fHwxNjQ0ODM4NDM5&ixlib=rb-1.2.1&q=80&w=200",

"3d graphics" : "https://images.unsplash.com/photo-1544380904-c686aad2fc40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHwzZCUyMGdyYXBoaWNzfGVufDB8fHx8MTY0NDgzMzMyNw&ixlib=rb-1.2.1&q=80&w=200",

"electricity" : "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2l0eXxlbnwwfHx8fDE2NDQ4MzMzMjc&ixlib=rb-1.2.1&q=80&w=200",

"christianity" : "https://images.unsplash.com/photo-1501060380799-184ae00cf089?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW5pdHl8ZW58MHx8fHwxNjQ0ODMzMzI3&ixlib=rb-1.2.1&q=80&w=200",

"monitors" : "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxtb25pdG9yc3xlbnwwfHx8fDE2NDQ4Mzg0Mzk&ixlib=rb-1.2.1&q=80&w=200",

"privacy" : "https://images.unsplash.com/photo-1557597774-9d273605dfa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxwcml2YWN5fGVufDB8fHx8MTY0NDgzMzMyNw&ixlib=rb-1.2.1&q=80&w=200",

"rgb" : "https://images.unsplash.com/photo-1562804625-f4965800e30a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxyZ2J8ZW58MHx8fHwxNjQ0ODM4NDM5&ixlib=rb-1.2.1&q=80&w=200",

"image formats" : "https://images.unsplash.com/photo-1604651901039-2cbcec704c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxpbWFnZSUyMGZvcm1hdHN8ZW58MHx8fHwxNjQ0ODMzMzI3&ixlib=rb-1.2.1&q=80&w=200",

"people" : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxwZW9wbGV8ZW58MHx8fHwxNjQ0ODMzMzI3&ixlib=rb-1.2.1&q=80&w=200",

"cameras" : "https://images.unsplash.com/photo-1579535984712-92fffbbaa266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxjYW1lcmFzfGVufDB8fHx8MTY0NDgzMzMyNw&ixlib=rb-1.2.1&q=80&w=200",

"history" : "https://images.unsplash.com/photo-1461360370896-922624d12aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxoaXN0b3J5fGVufDB8fHx8MTY0NDgzMzMyNw&ixlib=rb-1.2.1&q=80&w=200",

"apple" : "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxhcHBsZXxlbnwwfHx8fDE2NDQ4MjI5Njg&ixlib=rb-1.2.1&q=80&w=200",

"homosexuality" : "https://images.unsplash.com/photo-1542570780552-8beaff2907f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxob21vc2V4dWFsaXR5fGVufDB8fHx8MTY0NDgzMzMyNw&ixlib=rb-1.2.1&q=80&w=200",

"president" : "https://images.unsplash.com/photo-1577942948749-a3dbb5c6db0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxwcmVzaWRlbnR8ZW58MHx8fHwxNjQ0ODM4NDM5&ixlib=rb-1.2.1&q=80&w=200",

"insurance" : "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2V8ZW58MHx8fHwxNjQ0ODMzMzI3&ixlib=rb-1.2.1&q=80&w=200",

"firearms" : "https://images.unsplash.com/photo-1596823117603-9b90c0f14397?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxmaXJlYXJtc3xlbnwwfHx8fDE2NDQ4MzMzMjc&ixlib=rb-1.2.1&q=80&w=200",

"pain" : "https://images.unsplash.com/photo-1534343133720-0c20dba3a360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxwYWlufGVufDB8fHx8MTY0NDgzMzMyNw&ixlib=rb-1.2.1&q=80&w=200",

"satan" : "https://images.unsplash.com/photo-1575844261401-d69721eb5044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxzYXRhbnxlbnwwfHx8fDE2NDQ4MzMzMjc&ixlib=rb-1.2.1&q=80&w=200",

"hacking" : "https://images.unsplash.com/photo-1563206767-5b18f218e8de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxoYWNraW5nfGVufDB8fHx8MTY0NDgzODQzOQ&ixlib=rb-1.2.1&q=80&w=200",

"linux" : "https://images.unsplash.com/photo-1629654297299-c8506221ca97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxsaW51eHxlbnwwfHx8fDE2NDQ4Mzg0Mzk&ixlib=rb-1.2.1&q=80&w=200",

"israel palestine conflict" : "https://images.unsplash.com/photo-1634155736070-0d8f836c7f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxpc3JhZWwlMjBwYWxlc3RpbmUlMjBjb25mbGljdHxlbnwwfHx8fDE2NDQ4Mzg0Mzk&ixlib=rb-1.2.1&q=80&w=200",

"slavery" : "https://images.unsplash.com/photo-1574788175339-a53dcba9a9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxzbGF2ZXJ5fGVufDB8fHx8MTY0NDgzMzMyNw&ixlib=rb-1.2.1&q=80&w=200",

"zionism" : "https://images.unsplash.com/photo-1634145904473-299c59dcc45e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHx6aW9uaXNtfGVufDB8fHx8MTY0NDgzMzMyNw&ixlib=rb-1.2.1&q=80&w=200",

"constitution" : "https://images.unsplash.com/photo-1515040242872-08257d6d08c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxjb25zdGl0dXRpb258ZW58MHx8fHwxNjQ0ODMzMzI3&ixlib=rb-1.2.1&q=80&w=200",

"science" : "https://images.unsplash.com/photo-1507413245164-6160d8298b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxzY2llbmNlfGVufDB8fHx8MTY0NDgzODQzOQ&ixlib=rb-1.2.1&q=80&w=200",

"battery" : "https://images.unsplash.com/photo-1640622657236-e83b28df8e01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MXwxfHNlYXJjaHwxfHxiYXR0ZXJ5fGVufDB8fHx8MTY0NDgzMzMyNw&ixlib=rb-1.2.1&q=80&w=200",

"morality" : "https://images.unsplash.com/photo-1609008661074-0fe916c4e370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxtb3JhbGl0eXxlbnwwfHx8fDE2NDQ4MzMzMjc&ixlib=rb-1.2.1&q=80&w=200",

"militia" : "https://images.unsplash.com/photo-1598864849284-cceaef78ee4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxtaWxpdGlhfGVufDB8fHx8MTY0NDgzODQzOQ&ixlib=rb-1.2.1&q=80&w=200",

"audio" : "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxhdWRpb3xlbnwwfHx8fDE2NDQ4NDM5Mzc&ixlib=rb-1.2.1&q=80&w=200",

"test" : "https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHx0ZXN0fGVufDB8fHx8MTY0NDgzODQzOQ&ixlib=rb-1.2.1&q=80&w=200",

"light" : "https://images.unsplash.com/photo-1542785291-fe3faea39066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxsaWdodHxlbnwwfHx8fDE2NDQ4NDM5Mzg&ixlib=rb-1.2.1&q=80&w=200",

"corn" : "https://images.unsplash.com/photo-1531171000775-75f0213ca8a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxjb3JufGVufDB8fHx8MTY0NDgzODQzOQ&ixlib=rb-1.2.1&q=80&w=200",

"weight loss" : "https://images.unsplash.com/photo-1522844990619-4951c40f7eda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHx3ZWlnaHQlMjBsb3NzfGVufDB8fHx8MTY0NDgzMzMyNw&ixlib=rb-1.2.1&q=80&w=200",

"dogs" : "https://images.unsplash.com/photo-1529472119196-cb724127a98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTY0NDgzMzMyNw&ixlib=rb-1.2.1&q=80&w=200",

"articles" : "https://images.unsplash.com/photo-1623039405147-547794f92e9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxhcnRpY2xlc3xlbnwwfHx8fDE2NDQ4MzMzMjc&ixlib=rb-1.2.1&q=80&w=200",

"islam" : "https://images.unsplash.com/photo-1540866225557-9e4c58100c67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxpc2xhbXxlbnwwfHx8fDE2NDQ4MzMzMjc&ixlib=rb-1.2.1&q=80&w=200",

"god" : "https://images.unsplash.com/photo-1475319122043-5ca9eeceefaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxnb2R8ZW58MHx8fHwxNjQ0ODMzMzI3&ixlib=rb-1.2.1&q=80&w=200",

"microsoft" : "https://images.unsplash.com/photo-1530133532239-eda6f53fcf0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxtaWNyb3NvZnR8ZW58MHx8fHwxNjQ0ODMzMzI3&ixlib=rb-1.2.1&q=80&w=200",

"cancer" : "https://images.unsplash.com/photo-1584515933487-779824d29309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxjYW5jZXJ8ZW58MHx8fHwxNjQ0ODM4NDM5&ixlib=rb-1.2.1&q=80&w=200",

"infections" : "https://images.unsplash.com/photo-1579544758184-a8994eb607a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxpbmZlY3Rpb25zfGVufDB8fHx8MTY0NDgzMzMyNw&ixlib=rb-1.2.1&q=80&w=200",

"movies" : "https://images.unsplash.com/photo-1616530940355-351fabd9524b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxtb3ZpZXN8ZW58MHx8fHwxNjQ0ODMzMzI3&ixlib=rb-1.2.1&q=80&w=200",

"health" : "https://images.unsplash.com/photo-1587502537685-c9a38045c71a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MXwxfHNlYXJjaHwxfHxoZWFsdGh8ZW58MHx8fHwxNjQ0ODMzMzI3&ixlib=rb-1.2.1&q=80&w=200",

"secret codes" : "https://images.unsplash.com/photo-1634224143538-ce0221abf732?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxzZWNyZXQlMjBjb2Rlc3xlbnwwfHx8fDE2NDQ4Mzg0Mzk&ixlib=rb-1.2.1&q=80&w=200",

"graphics cards" : "https://images.unsplash.com/photo-1587225036677-95fc14cd067a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxncmFwaGljcyUyMGNhcmRzfGVufDB8fHx8MTY0NDg0MzkzNw&ixlib=rb-1.2.1&q=80&w=200",

"game" : "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxnYW1lfGVufDB8fHx8MTY0NDgzMzMyNw&ixlib=rb-1.2.1&q=80&w=200",

"organization" : "https://images.unsplash.com/photo-1550376026-7375b92bb318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxvcmdhbml6YXRpb258ZW58MHx8fHwxNjQ0ODM4NDM5&ixlib=rb-1.2.1&q=80&w=200",

"belief" : "https://images.unsplash.com/photo-1602677416440-51e91ddeef89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxiZWxpZWZ8ZW58MHx8fHwxNjQ0ODM4NDM5&ixlib=rb-1.2.1&q=80&w=200",

"radar" : "https://images.unsplash.com/photo-1610457642191-05328cdf34ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxyYWRhcnxlbnwwfHx8fDE2NDQ4NDM5Mzg&ixlib=rb-1.2.1&q=80&w=200",

"scanner" : "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxzY2FubmVyfGVufDB8fHx8MTY0NDgzMzMyNw&ixlib=rb-1.2.1&q=80&w=200",

"advertising" : "https://images.unsplash.com/photo-1557858310-9052820906f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxhZHZlcnRpc2luZ3xlbnwwfHx8fDE2NDQ4MzMzMjc&ixlib=rb-1.2.1&q=80&w=200",

"computers hardware" : "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxjb21wdXRlcnMlMjBoYXJkd2FyZXxlbnwwfHx8fDE2NDQ4Mzg0Mzk&ixlib=rb-1.2.1&q=80&w=200",

"money" : "https://images.unsplash.com/photo-1638913658828-afb88c3d4d11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MXwxfHNlYXJjaHwxfHxtb25leXxlbnwwfHx8fDE2NDQ4Mzg0Mzk&ixlib=rb-1.2.1&q=80&w=200",

"pregnancy" : "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxwcmVnbmFuY3l8ZW58MHx8fHwxNjQ0ODMzMzI3&ixlib=rb-1.2.1&q=80&w=200",

"printers" : "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxwcmludGVyc3xlbnwwfHx8fDE2NDQ4MzMzMjc&ixlib=rb-1.2.1&q=80&w=200",

"shopping" : "https://images.unsplash.com/photo-1481437156560-3205f6a55735?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxzaG9wcGluZ3xlbnwwfHx8fDE2NDQ4Mzg0Mzk&ixlib=rb-1.2.1&q=80&w=200",

"camcorders" : "https://images.unsplash.com/photo-1525740280772-00fa0cefe2e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxjYW1jb3JkZXJzfGVufDB8fHx8MTY0NDgzMzMyNw&ixlib=rb-1.2.1&q=80&w=200",

"war" : "https://images.unsplash.com/photo-1500252185289-40ca85eb23a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHx3YXJ8ZW58MHx8fHwxNjQ0ODM4NDM5&ixlib=rb-1.2.1&q=80&w=200",

"conspiracy" : "https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxjb25zcGlyYWN5fGVufDB8fHx8MTY0NDg0MzkzOA&ixlib=rb-1.2.1&q=80&w=200",

"russia" : "https://images.unsplash.com/photo-1513326738677-b964603b136d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxydXNzaWF8ZW58MHx8fHwxNjQ0ODQzOTM3&ixlib=rb-1.2.1&q=80&w=200",

"computers" : "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxjb21wdXRlcnN8ZW58MHx8fHwxNjQ0ODQzOTM3&ixlib=rb-1.2.1&q=80&w=200",

"symptoms" : "https://images.unsplash.com/photo-1607583449928-4ab0cb473e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxzeW1wdG9tc3xlbnwwfHx8fDE2NDQ4MzA4NDI&ixlib=rb-1.2.1&q=80&w=200",

"arabs" : "https://images.unsplash.com/photo-1572510829757-ae7c388b35c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxhcmFic3xlbnwwfHx8fDE2NDQ4Mzg0Mzk&ixlib=rb-1.2.1&q=80&w=200",

"korea" : "https://images.unsplash.com/photo-1517154421773-0529f29ea451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxrb3JlYXxlbnwwfHx8fDE2NDQ4Mzg0Mzk&ixlib=rb-1.2.1&q=80&w=200",

"networking" : "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxuZXR3b3JraW5nfGVufDB8fHx8MTY0NDg0MzkzNw&ixlib=rb-1.2.1&q=80&w=200",

"nazi" : "https://images.unsplash.com/photo-1599779462059-545738f600fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxuYXppfGVufDB8fHx8MTY0NDg0MzkzNw&ixlib=rb-1.2.1&q=80&w=200",

"humour" : "https://images.unsplash.com/photo-1614354518913-63b8ed1d8ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxodW1vdXJ8ZW58MHx8fHwxNjQ0ODM4NDM5&ixlib=rb-1.2.1&q=80&w=200",

"travel" : "https://images.unsplash.com/photo-1488646953014-85cb44e25828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHx0cmF2ZWx8ZW58MHx8fHwxNjQ0ODM4NDM5&ixlib=rb-1.2.1&q=80&w=200",

"crime" : "https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxjcmltZXxlbnwwfHx8fDE2NDQ4NDM5Mzg&ixlib=rb-1.2.1&q=80&w=200",

"comics" : "https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDExOTJ8MHwxfHNlYXJjaHwxfHxjb21pY3N8ZW58MHx8fHwxNjQ0ODQzOTM4&ixlib=rb-1.2.1&q=80&w=200"}

const CategoryImage=(labels)=>{
    // console.log(labels)

try {
    if(allCategoryThumbnailsVerySmall[labels]===undefined){
        return (allCategoryThumbnailsVerySmall["articles"])
    }
    else{
        return(allCategoryThumbnailsVerySmall[labels])
    }
    
} catch (error) {
    return (allCategoryThumbnailsVerySmall["articles"])
}
}

export { CategoryImage };