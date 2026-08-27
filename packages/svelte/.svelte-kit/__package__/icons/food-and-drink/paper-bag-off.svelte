<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7.158 3.185C7.414 3.066 7.7 3 8 3h8a2 2 0 0 1 2 2v1.82a5 5 0 0 0 .528 2.236l.944 1.888A5 5 0 0 1 20 13.18V16m-.177 3.824A2 2 0 0 1 18 21H6m0 0a2 2 0 0 1-2-2v-5.82a5 5 0 0 1 .528-2.236L6 8m0 13a2 2 0 0 0 2-2v-5.82a5 5 0 0 0-.528-2.236L6 8m0 0V6m7.185 7.173a1.999 1.999 0 1 0 2.64 2.647M11 7h2M3 3l18 18\"/>";
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
