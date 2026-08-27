<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4.711 17.875c-.534-1.339-1.35-4.178.129-6.47 1.415-2.193 3.769-3.608 5.099-4.278zm15.004-5.367c-.54 3.409-2.094 6.156-4.155 7.348-4.069 2.353-8.144.45-9.297-.188.877-1.436 4.433-7.22 6.882-10.591C15.859 5.34 19.009 3.099 19.71 3c0 .201.03.55.071 1.03.144 1.709.443 5.264-.066 8.478\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
