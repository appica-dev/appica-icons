<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 10a7 7 0 0 0 7 7m0 0a7 7 0 0 0 7-7m-7 7v4m-4 0h8M9 5a3 3 0 1 1 6 0v5a3 3 0 0 1-6 0z\"/>";
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
