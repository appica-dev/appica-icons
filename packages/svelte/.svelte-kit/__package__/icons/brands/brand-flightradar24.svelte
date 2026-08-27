<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m8.5 20 3.5-8-6.5 6M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12m4 0a5 5 0 1 0 10 0 5 5 0 0 0-10 0m4 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/>";
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
