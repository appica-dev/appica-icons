<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m8.7 10.7 6.6-3.4m-6.6 6 6.6 3.4M3 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0m12-6a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0\"/>";
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
