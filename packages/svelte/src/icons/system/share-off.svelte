<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15.861 15.896a3 3 0 0 0 4.265 4.22m.578-3.417a3 3 0 0 0-1.507-1.45M8.7 10.7l1.336-.688M12.66 8.66 15.3 7.3m-6.6 6 6.6 3.4M3 3l18 18M3 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0m12-6a3 3 0 1 0 6 0 3 3 0 0 0-6 0\"/>";
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
