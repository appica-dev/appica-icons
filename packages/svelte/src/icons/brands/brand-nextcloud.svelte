<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 12a5 5 0 1 0 10 0 5 5 0 0 0-10 0m-5 .5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m15 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0\"/>";
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
