<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m8 20 4-9m-1.3 3c.437 1.263 1.43 2 2.55 2 2.071 0 3.75-1.554 3.75-4a4.998 4.998 0 0 0-5.863-4.93A5 5 0 0 0 7.3 13.7M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12\"/>";
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
