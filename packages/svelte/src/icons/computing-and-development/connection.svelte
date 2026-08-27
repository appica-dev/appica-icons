<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m8.5 15.5 7-7m-.5-2a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m-11 11a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0\"/>";
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
