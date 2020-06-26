import bpy
import sys

print ('Starting script to update objects in Blender file')

argv = sys.argv[sys.argv.index("--") + 1:]

print ("The script has the name %s" % (sys.argv[0]))
print ("Arguments of the script %s" % argv)



## Count the arguments
#arguments = len(sys.argv) - 1

## Output argument-wise
#position = 1
#while (arguments >= position):
#    print ("Parameter %i: %s" % (position, sys.argv[position]))
#    position = position + 1

# bpy.data.objects["Text01"].data.body = "Alice"


#def convertToText(obj):
#    bpy.context.view_layer.objects.active = obj
#    bpy.context.active_object.select_set(state=True)
#    bpy.ops.object.convert(target="MESH")
    
#convertToText(bpy.data.objects["Text01"])
#convertToText(bpy.data.objects["Text02"])


