<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4.028 13.252C3.371 12.28 3 11.174 3 10c0-3.866 4.03-7 9-7s9 3.134 9 7-4.03 7-9 7c-1.913 0-3.686-.464-5.144-1.255M5 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 0c0 1.42.316 2.805 1 4\"/>";
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
