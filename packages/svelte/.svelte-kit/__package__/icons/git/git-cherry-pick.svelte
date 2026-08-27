<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 15a3 3 0 1 1 0-6m0 6a3 3 0 1 0 0-6m0 6v6M7 9V3m6 4h2.5l1.5 5m0 0-1.5 5H13m4-5h3\"/>";
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
