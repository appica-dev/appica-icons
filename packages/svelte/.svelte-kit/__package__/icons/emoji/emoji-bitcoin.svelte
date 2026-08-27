<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17 21v-6m2 0v-1.5m0 9V21m-2-3h3m-1 0h.5m0 0a1.5 1.5 0 1 1 0 3H16m3.5-3a1.5 1.5 0 1 0 0-3H16m4.87-4.52a9 9 0 1 0-7.875 10.465M9 10h.01M15 10h.01M9.5 15c.658.64 1.56 1 2.5 1 .357 0 .709-.052 1.043-.151\"/>";
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
