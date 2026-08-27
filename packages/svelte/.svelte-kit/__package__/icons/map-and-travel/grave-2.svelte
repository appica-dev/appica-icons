<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 16.17V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v9.171M12 7v5m-2-3h4M5 21v-2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2z\"/>";
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
