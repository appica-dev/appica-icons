<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 6h5M7 17.99h7M4.5 6l5.5 6.994m0 0v4.996m0-4.996 6-4.996m-3.5 0h5m2.5 2.998v3.996m0 2.998V18\"/>";
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
