<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16.875 3.556A9.75 9.75 0 1 1 2.25 12l.005-.316a9.75 9.75 0 0 1 14.62-8.128m0 5.519h-9.75a.975.975 0 0 0-.975.975v3.9a.975.975 0 0 0 .975.975h9.75a.975.975 0 0 0 .975-.975v-3.9a.975.975 0 0 0-.975-.975\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
