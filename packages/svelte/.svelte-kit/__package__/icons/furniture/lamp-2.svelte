<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 21h9m-4 0-7-8 8.5-5.5m.242.074-1.156-1.156a2 2 0 0 1 2.828-2.829l1.144 1.144M15.5 12l.208.274a2.527 2.527 0 0 0 3.556 0c.939-.933.98-2.42.122-3.4l-.366-.369M13 14c-2.148-2.148-2.148-5.852 0-8 2.088-2.088 5.842-1.972 8 0z\"/>";
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
