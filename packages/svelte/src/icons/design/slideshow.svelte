<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 6h.01M3 13l4-4c.456-.439.973-.67 1.5-.67s1.044.231 1.5.67l4 4m-1-1 2-2c.456-.439.973-.67 1.5-.67s1.044.231 1.5.67l3 3M8 21h.01M12 21h.01M16 21h.01M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z\"/>";
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
