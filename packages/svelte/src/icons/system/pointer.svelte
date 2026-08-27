<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14.186 13.14l5.644-2.202c1.625-.634 1.538-2.962-.13-3.473L5.381 3.083c-1.41-.431-2.73.888-2.298 2.298l4.382 14.318c.51 1.668 2.84 1.755 3.473.13l2.202-5.644a1.84 1.84 0 0 1 1.045-1.045\"/>";
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
