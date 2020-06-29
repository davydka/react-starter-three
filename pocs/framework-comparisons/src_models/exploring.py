import bpy
import sys

print ('Starting script to update objects in Blender file')

argv = sys.argv[sys.argv.index("--") + 1:]

print ("The script has the name %s" % (sys.argv[0]))
print ("Arguments of the script %s" % argv)


def convertToText(obj):
    bpy.context.view_layer.objects.active = obj
    bpy.context.active_object.select_set(state=True)
    bpy.ops.object.convert(target="MESH")



## Count the arguments
arguments = len(argv) - 1

## Output argument-wise
position = 0
while (arguments >= position):
    target = "Text"+str(position + 1).zfill(2)
    print ("%s: %s" % (target, argv[position]))
    # bpy.data.objects[target].data.body = argv[position]
    # convertToText(bpy.data.objects[target])
    position = position + 1

# bpy.data.objects["Text01"].data.body = "Alice"

#convertToText(bpy.data.objects["Text01"])

