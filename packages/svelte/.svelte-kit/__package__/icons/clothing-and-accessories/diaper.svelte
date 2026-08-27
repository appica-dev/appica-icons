<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17 9h4M3 9h4m7.25 10.7v-1.4a6.3 6.3 0 0 1 6.3-6.3m-10.8 7.7v-1.4a6.3 6.3 0 0 0-6.3-6.3M3 8.323c0-.579 0-.868.044-1.11a2.7 2.7 0 0 1 2.17-2.169C5.453 5 5.743 5 6.323 5h11.353c.579 0 .868 0 1.11.044a2.7 2.7 0 0 1 2.169 2.17c.044.24.044.53.044 1.11V11a9 9 0 0 1-18 0z\"/>";
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
