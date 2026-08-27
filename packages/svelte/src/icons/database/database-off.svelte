<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12.983 8.978C16.938 8.796 20 7.532 20 6m0 0c0-1.657-3.582-3-8-3-1.661 0-3.204.19-4.483.515M20 6v6M4.734 4.743C4.263 5.125 4 5.551 4 6m0 0c0 1.22 1.944 2.271 4.734 2.74M4 6v6m0 0c0 1.657 3.582 3 8 3 .986 0 1.93-.067 2.802-.19M4 12v6c0 1.657 3.582 3 8 3 3.217 0 5.991-.712 7.261-1.74m-1.272-5.27C19.24 13.46 20 12.762 20 12m0 0v4M3 3l18 18\"/>";
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
